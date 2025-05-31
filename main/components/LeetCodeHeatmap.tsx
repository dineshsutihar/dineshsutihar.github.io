'use client';
import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

const getUTCDayStart = (date: Date) => {
    const d = new Date(date);
    return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
};

const calculateStats = (contributions: { [timestamp: string]: number }) => {
    const today = getUTCDayStart(new Date());
    let totalSubmissions = 0;
    let activeDays = 0;
    let maxStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < 365; i++) {
        const dayTimestamp = ((today - i * 24 * 60 * 60 * 1000) / 1000).toString();
        const count = contributions[dayTimestamp] || 0;

        totalSubmissions += count;
        if (count > 0) {
            activeDays++;
            currentStreak++;
        } else {
            maxStreak = Math.max(maxStreak, currentStreak);
            currentStreak = 0;
        }
    }
    maxStreak = Math.max(maxStreak, currentStreak);

    return { totalSubmissions, activeDays, maxStreak };
};

const getColor = (count: number): string => {
    if (count === 0) return 'bg-gray-800';
    if (count >= 1 && count <= 2) return 'bg-green-900';
    if (count >= 3 && count <= 5) return 'bg-green-700';
    return 'bg-green-500';
};

export const LeetCodeHeatmap = () => {
    const [calendar, setCalendar] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/leetcode/heatmap', { method: 'POST' });
                if (!response.ok) throw new Error('Failed to fetch heatmap data');
                const result = await response.json();
                setCalendar(result.submissionCalendar);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 min-h-fit">
                <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 text-red-500">
                Error: {error}
            </div>
        );
    }

    const contributions = JSON.parse(calendar || '{}');
    const { totalSubmissions, activeDays, maxStreak } = calculateStats(contributions);

    const today = new Date();
    const endDate = getUTCDayStart(today);
    const daysToShow = 365 + today.getUTCDay() + 1;

    const days = Array.from({ length: daysToShow }, (_, i) => {
        const day = new Date(endDate);
        day.setUTCDate(day.getUTCDate() - i);
        return day;
    }).reverse();

    const weekDays = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    let currentMonth = days[0].getUTCMonth();

    return (
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative min-h-fit">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-xl" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r  from-orange-500 to-yellow-500 rounded-lg">
                        <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">LeetCode Activity</h3>
                        <p className="text-sm text-gray-400">@dineshsutihar</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{totalSubmissions.toLocaleString()} submissions in the last year</span>
                        <div className="flex gap-4 text-xs text-gray-500">
                            <span>Active Days: <span className="text-white font-semibold">{activeDays}</span></span>
                            <span>Max Streak: <span className="text-white font-semibold">{maxStreak}</span></span>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 overflow-x-auto">
                        <div className="flex">
                            <div className="flex flex-col gap-1 mr-2 text-xs text-gray-500">
                                {weekDays.map((day, index) => (
                                    <div key={index} className="h-3 w-6 text-xs">
                                        {index % 2 === 0 ? day.slice(0, 3) : ''}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-rows-7 grid-flow-col gap-0.5">
                                {days.map((day, i) => {
                                    const timestamp = (getUTCDayStart(day) / 1000).toString();
                                    const dayMonth = day.getUTCMonth();
                                    const count = contributions[timestamp] || 0;

                                    if (i > 0 && currentMonth !== dayMonth) {
                                        currentMonth = dayMonth;
                                        const emptyDivs = Array.from({ length: 7 }, (_, j) => (
                                            <div key={`${i}-${j}`} className="w-3 h-3 opacity-0" />
                                        ));
                                        return (
                                            <div key={`gap-${i}`} className="contents">
                                                {emptyDivs}
                                                <div
                                                    className={`w-3 h-3 rounded-sm ${getColor(count)}`}
                                                    title={`${count} submissions on ${day.toDateString()}`}
                                                />
                                            </div>
                                        );
                                    }

                                    currentMonth = dayMonth;
                                    return (
                                        <div
                                            key={i}
                                            className={`w-3 h-3 rounded-sm ${getColor(count)} hover:ring-1 hover:ring-green-400 transition-all`}
                                            title={`${count} submissions on ${day.toDateString()}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/20">
                            <div className="text-green-400 font-bold text-lg">{activeDays}</div>
                            <div className="text-gray-400">Active Days</div>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/20">
                            <div className="text-green-400 font-bold text-lg">{maxStreak}</div>
                            <div className="text-gray-400">Max Streak</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
