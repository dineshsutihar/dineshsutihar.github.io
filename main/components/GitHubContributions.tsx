'use client';
import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

interface ContributionDay {
    date: string;
    count: number;
    level: number;
}

const GitHubContributions = () => {
    const [contributionData, setContributionData] = useState<ContributionDay[][]>([]);
    const [totalStars, setTotalStars] = useState(0);
    const [totalRepos, setTotalRepos] = useState(0);
    const [loading, setLoading] = useState(true);
    const username = 'dineshsutihar';

    const TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN!;

    useEffect(() => {
        const fetchData = async () => {
            const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
            repositories(first: 100, ownerAffiliations: OWNER) {
              totalCount
              nodes {
                stargazerCount
              }
            }
          }
        }
      `;

            try {
                const res = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${TOKEN}`,
                    },
                    body: JSON.stringify({ query }),
                });

                const json = await res.json();
                const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
                const repos = json.data.user.repositories;

                const parsed = weeks.map((week: any) =>
                    week.contributionDays.map((day: any) => ({
                        date: day.date,
                        count: day.contributionCount,
                        level: getLevel(day.contributionCount),
                    }))
                );

                setContributionData(parsed);
                setTotalRepos(repos.totalCount);
                setTotalStars(repos.nodes.reduce((sum: number, repo: any) => sum + repo.stargazerCount, 0));
            } catch (error) {
                console.error('Failed to fetch contributions:', error);
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    const getLevel = (count: number): number => {
        if (count === 0) return 0;
        if (count < 3) return 1;
        if (count < 7) return 2;
        if (count < 15) return 3;
        return 4;
    };

    const getContributionColor = (level: number) => {
        switch (level) {
            case 1: return 'bg-green-900';
            case 2: return 'bg-green-700';
            case 3: return 'bg-green-500';
            case 4: return 'bg-green-400';
            default: return 'bg-gray-800';
        }
    };

    const totalContributions = contributionData.flat().reduce((sum, d) => sum + d.count, 0);
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getMonthLabels = () => {
        const labels: JSX.Element[] = [];
        let lastMonth = '';
        for (let i = 0; i < contributionData.length; i++) {
            const day = contributionData[i][0];
            const monthName = new Date(day.date).toLocaleString('default', { month: 'short' });

            if (monthName !== lastMonth) {
                labels.push(
                    <div
                        key={i}
                        className="text-xs text-gray-500 w-5 text-center"
                        style={{ minWidth: '15px' }}
                    >
                        {monthName}
                    </div>
                );
                lastMonth = monthName;
            } else {
                labels.push(<div key={i} className="w-5" />);
            }
        }
        return labels;
    };

    return (
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative min-h-fit md:col-span-3 md:row-span-1">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg">
                        <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">GitHub Activity</h3>
                        <p className="text-sm text-gray-400">@{username}</p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-400"></div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">{totalContributions} contributions in the last year</span>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>Less</span>
                                <div className="flex gap-1">
                                    {[0, 1, 2, 3, 4].map((lvl) => (
                                        <div key={lvl} className={`w-2.5 h-2.5 ${getContributionColor(lvl)} rounded-sm`}></div>
                                    ))}
                                </div>
                                <span>More</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30 overflow-x-auto">
                            <div className="min-w-[800px]">
                                {/*TODO:  Month Label needed to be fixed*/}
                                <div className="flex justify-end ml-14 gap-3 w-full mb-1">{getMonthLabels()}</div>

                                <div className="flex">
                                    <div className="flex flex-col gap-1 mr-2 text-xs text-gray-500">
                                        {dayLabels.map((day, index) => (
                                            <div key={index} className="h-3 w-6">
                                                {index % 2 === 0 ? day.slice(0, 3) : ''}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-1 justify-end">
                                        {contributionData.map((week, weekIndex) => (
                                            <div key={weekIndex} className="flex flex-col gap-1">
                                                {Array.from({ length: 7 }).map((_, dayIndex) => {
                                                    const day = week[dayIndex];
                                                    return (
                                                        <div
                                                            key={dayIndex}
                                                            className={`w-3 h-3 rounded-sm ${day ? getContributionColor(day.level) : 'bg-gray-800'} hover:ring-1 hover:ring-green-400 transition-all`}
                                                            title={day ? `${day.count} contributions on ${day.date}` : 'No contributions'}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/20">
                                <div className="text-green-400 font-bold text-lg">{totalRepos}</div>
                                <div className="text-gray-400">Total Repositories</div>
                            </div>
                            <div className="bg-slate-800/30 rounded-lg p-3 border border-slate-700/20">
                                <div className="text-green-400 font-bold text-lg">{totalStars}</div>
                                <div className="text-gray-400">Stars Earned</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GitHubContributions;
