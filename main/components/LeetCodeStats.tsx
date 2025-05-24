"use client";
import React, { useState, useEffect } from "react";
import { Code, Trophy, Target } from "lucide-react";

const LeetCodeStats = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const username = "dineshsutihar";

    useEffect(() => {
        const fetchData = async () => {
            const query = `
        query getUserProfile($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
          userContestRanking(username: $username) {
            rating
            globalRanking
            totalParticipants
          }
          userContestRankingHistory(username: $username) {
            attended
            rating
            contest {
              title
              startTime
            }
          }
        }
      `;

            try {
                const response = await fetch("/api/leetcode", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username },
                    }),
                });

                const json = await response.json();
                setData(json.data);
            } catch (error) {
                console.error("Failed to fetch LeetCode data:", error);
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

    const solvedMap = data.matchedUser.submitStats.acSubmissionNum.reduce((acc: any, item: any) => {
        acc[item.difficulty.toLowerCase()] = item.count;
        return acc;
    }, {});

    const totalMap = data.allQuestionsCount.reduce((acc: any, item: any) => {
        acc[item.difficulty.toLowerCase()] = item.count;
        return acc;
    }, {});

    const contestStats = data.userContestRanking || {};

    const progressData = [
        {
            label: "Easy",
            solved: solvedMap.easy || 0,
            total: totalMap.easy || 0,
            color: "text-green-400",
            bgColor: "bg-green-400",
        },
        {
            label: "Medium",
            solved: solvedMap.medium || 0,
            total: totalMap.medium || 0,
            color: "text-yellow-400",
            bgColor: "bg-yellow-400",
        },
        {
            label: "Hard",
            solved: solvedMap.hard || 0,
            total: totalMap.hard || 0,
            color: "text-red-400",
            bgColor: "bg-red-400",
        },
    ];

    return (
        <div className="h-full bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden col-span-1 md:col-span-2">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 h-full flex flex-col">
                {/* Header with Title and Contest Stats */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg">
                            <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">LeetCode</h3>
                            <p className="text-sm text-gray-400">@{username}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-slate-500/10 rounded-lg px-3 py-2 border border-slate-500/20 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Trophy className="w-3 h-3 text-orange-400" />
                                <span className="text-xs text-orange-400">Global Rank</span>
                            </div>
                            <div className="text-sm font-bold text-white">
                                {contestStats.globalRanking?.toLocaleString() || "N/A"}
                            </div>
                        </div>
                        <div className="bg-slate-500/10 rounded-lg px-3 py-2 border border-slate-500/20 text-center">
                            <div className="flex items-center justify-center gap-1 mb-1">
                                <Target className="w-3 h-3 text-orange-400" />
                                <span className="text-xs text-orange-400">Rating</span>
                            </div>
                            <div className="text-sm font-bold text-white">
                                {contestStats.rating?.toFixed(0) || "N/A"}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total Solved */}
                <div className="bg-slate-500/10 rounded-xl p-4 border border-slate-500/20 mb-4">
                    <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-orange-400">
                            {progressData.reduce((sum, d) => sum + d.solved, 0)}
                        </div>
                        <div className="text-sm text-gray-300">Problems Solved</div>
                    </div>

                    <div className="space-y-3">
                        {progressData.map((item, index) => {
                            const percentage = item.total > 0 ? (item.solved / item.total) * 100 : 0;
                            return (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-gray-300">{item.label}</span>
                                        <span className={`text-sm font-semibold ${item.color}`}>
                                            {item.solved}/{item.total}
                                        </span>
                                    </div>
                                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full ${item.bgColor} transition-all duration-500`}
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Contest */}
                {data.userContestRankingHistory?.length > 0 && (
                    <>
                        <div className="text-xs text-gray-400 mb-2">Recent Contests</div>
                        <div className="space-y-1">
                            {data.userContestRankingHistory
                                .filter((c: any) => c.attended)
                                .slice(-2)
                                .reverse()
                                .map((c: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between text-xs bg-slate-800/30 rounded p-2"
                                    >
                                        <span className="text-gray-300 truncate">{c.contest.title}</span>
                                        <span className="text-orange-400">{c.rating.toFixed(0)}</span>
                                    </div>
                                ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default LeetCodeStats;
