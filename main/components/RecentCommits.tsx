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
                // Fetch user's repositories first
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=10`);
                const repos = await reposResponse.json();

                if (!Array.isArray(repos)) {
                    console.error('Failed to fetch repos:', repos);
                    setCommits([]);
                    setLoading(false);
                    return;
                }

                const allCommits: Commit[] = [];

                // Fetch commits from each repo
                for (const repo of repos) {
                    if (allCommits.length >= 7) break;

                    try {
                        const commitsResponse = await fetch(
                            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`
                        );
                        const repoCommits = await commitsResponse.json();

                        if (!Array.isArray(repoCommits)) continue;

                        for (const commit of repoCommits) {
                            if (allCommits.length >= 7) break;

                            allCommits.push({
                                sha: commit.sha,
                                commit: {
                                    message: commit.commit?.message || 'No message',
                                    author: {
                                        date: commit.commit?.author?.date || new Date().toISOString()
                                    }
                                },
                                repoName: repo.name
                            });
                        }
                    } catch (repoError) {
                        console.error(`Error fetching commits for ${repo.name}:`, repoError);
                    }
                }

                // Sort by date (newest first)
                allCommits.sort((a, b) =>
                    new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime()
                );

                setCommits(allCommits.slice(0, 7));
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
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative h-full">
            {/* Subtle accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20">
                        <GitCommit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">Recent Activity</h3>
                        <p className="text-xs text-slate-400">Latest commits across repositories</p>
                    </div>
                </div>

                {/* Commits List with Timeline */}
                <div
                    className="flex-1 overflow-y-auto pr-1 no-scrollbar"
                    style={{ maxHeight: '380px' }}
                >
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="w-5 h-5 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
                        </div>
                    ) : commits.length > 0 ? (
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/40 via-slate-600/30 to-transparent"></div>

                            <div className="space-y-1">
                                {commits.map((commit, index) => (
                                    <div
                                        key={commit.sha}
                                        className="group relative pl-7 py-3 rounded-lg hover:bg-slate-800/40 transition-colors duration-200 cursor-default"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] h-[15px] rounded-full border-2 border-slate-700 bg-slate-900 group-hover:border-emerald-500/60 group-hover:bg-emerald-500/10 transition-colors duration-200 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 group-hover:bg-emerald-400 transition-colors"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col gap-1.5">
                                            {/* Commit message */}
                                            <p className="text-sm text-slate-200 font-medium leading-snug line-clamp-1 group-hover:text-white transition-colors">
                                                {commit.commit.message.split('\n')[0]}
                                            </p>

                                            {/* Meta info */}
                                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                                <code className="font-mono text-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                                    {commit.sha.substring(0, 7)}
                                                </code>
                                                <span className="text-slate-600">•</span>
                                                <span className="text-slate-400 truncate max-w-[120px]">{commit.repoName}</span>
                                                <span className="text-slate-600">•</span>
                                                <span className="flex items-center gap-1 text-slate-500">
                                                    <Clock className="w-3 h-3" />
                                                    {formatDate(commit.commit.author.date)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-slate-500">
                            <GitCommit className="w-8 h-8 mb-2 opacity-30" />
                            <p className="text-sm">No recent commits</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentCommits;