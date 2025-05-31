"use client";
import React, { useState, useEffect } from 'react';
import { GitCommit, Clock } from 'lucide-react';

interface Commit {
    sha: string;
    commit: {
        message: string;
        author: {
            date: string;
        };
    };
    repoName: string;
}

const RecentCommits = () => {
    const [commits, setCommits] = useState<Commit[]>([]);
    const [loading, setLoading] = useState(true);
    const username = 'dineshsutihar';

    useEffect(() => {
        const fetchRecentCommits = async () => {
            try {
                // Fetch user's recent events (including commits)
                const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=30`);
                const events = await eventsResponse.json();

                // Filter to get only push events (commits)
                const pushEvents = events.filter((event: any) => event.type === 'PushEvent');
                const recentCommits = [];

                // Extract commits from push events
                for (const event of pushEvents) {
                    const repoName = event.repo.name.split('/')[1];

                    for (const commit of event.payload.commits) {
                        recentCommits.push({
                            sha: commit.sha,
                            commit: {
                                message: commit.message,
                                author: {
                                    date: event.created_at
                                }
                            },
                            repoName: repoName
                        });

                        if (recentCommits.length >= 7) break;
                    }

                    if (recentCommits.length >= 7) break;
                }

                setCommits(recentCommits);
            } catch (error) {
                console.error('Error fetching commits:', error);
                setCommits([]);
            }
            setLoading(false);
        };

        fetchRecentCommits();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return '1 day ago';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };

    return (
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative min-h-fit col-span-1 md:col-span-2 md:row-span-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg">
                        <GitCommit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Github Commits</h3>
                        <p className="text-sm text-gray-400">Latest 7 commits</p>
                    </div>
                </div>

                {/* Recent Commits Section */}
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                    {loading ? (
                        <div className="flex items-center justify-center py-4">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {commits.length > 0 ? commits.map((commit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-white font-medium">
                                            {commit.commit.message.split('\n')[0]}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                                            <span className="text-purple-400">{commit.repoName}</span>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {formatDate(commit.commit.author.date)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="text-sm text-gray-400 text-center py-2">
                                    No recent commits found
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentCommits;