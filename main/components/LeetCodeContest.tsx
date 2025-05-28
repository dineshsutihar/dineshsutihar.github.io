"use client";
import { useState, useEffect } from "react";
import { Target, Code } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface ContestData {
    rating: number;
    globalRanking: number;
    attendedContestsCount: number;
}

interface HistoryItem {
    rating: number;
    contest: { startTime: number };
}

interface FetchedData {
    contest: ContestData | null;
    history: HistoryItem[];
}

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload?.length) {
        return (
            <div className="bg-slate-700 text-white p-2 rounded shadow text-xs">
                <div>Rating: {Math.round(payload[0].value)}</div>
            </div>
        );
    }
    return null;
};

export const LeetCodeContest = () => {
    const [data, setData] = useState<FetchedData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/leetcode/contest", { method: "POST" });
                if (!res.ok) throw new Error("Failed to fetch contest data");
                const result = await res.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading || !data) {
        return (
            <div className="h-full bg-gradient-to-br from-orange-900/30 to-yellow-900/30 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-6 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-400"></div>
            </div>
        );
    }

    if (error || !data.contest) {
        return (
            <div className="p-4 text-center text-red-400 bg-slate-800 border border-red-500/20 rounded-2xl">
                {error || "No contest data available"}
            </div>
        );
    }

    const chartData = data.history.map((item) => ({
        time: item.contest.startTime * 1000,
        rating: item.rating,
    }));

    return (
        <div className="h-full bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">LeetCode Contest</h3>
                            <p className="text-sm text-gray-400">Statistics</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-slate-500/10 rounded-lg px-3 py-2 border border-slate-500/20 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Target className="w-3 h-3 text-yellow-400" />
                                <span className="text-xs text-yellow-400">Rating</span>
                            </div>
                            <div className="text-sm font-bold text-white">
                                {Math.round(data.contest.rating)}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contest History Graph */}
                <div className="w-full h-[200px] mt-2">
                    <ResponsiveContainer>
                        <LineChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <XAxis
                                dataKey="time"
                                tickFormatter={(timeStr) => new Date(timeStr).getFullYear().toString()}
                                domain={['dataMin', 'dataMax']}
                                tick={{ fill: '#9CA3AF' }}
                                stroke="#4B5563"
                                type="number"
                                scale="time"
                            />
                            <YAxis hide domain={["dataMin - 100", "dataMax + 100"]} />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="rating"
                                stroke="#FBBF24"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 4, fill: "#FBBF24", stroke: "#1F2937" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4 text-center text-sm text-gray-400">
                    Attended Contests:{" "}
                    <span className="text-white font-semibold">{data.contest.attendedContestsCount}</span>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeContest;
