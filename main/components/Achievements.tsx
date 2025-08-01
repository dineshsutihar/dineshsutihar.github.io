import React from "react";
import { Trophy, BookOpen, BadgeCheck, ExternalLink } from "lucide-react";

type AchievementItem = {
    label: string;
    url: string;
    details?: string;
};

type AchievementSection = {
    name: string;
    icon: React.ElementType;
    color: string;
    items: AchievementItem[];
};

const sections: AchievementSection[] = [
    {
        name: "Research Papers",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500",
        items: [
            {
                label:
                    "IoT-Driven Smart Classroom System for Efficient Resource Monitoring and Automation",
                details: "16th International Conference on Recent Engineering & Technology, May 2025",
                url: "https://example.com/iot-smart-classroom-paper"
            },
            {
                label:
                    "Advancing Log Analysis and Anomaly Detection with Large Language Models",
                details: "16th ICCCNT, July 2025",
                url: "https://example.com/log-analysis-paper"
            }
        ]
    },
    {
        name: "Certifications",
        icon: BadgeCheck,
        color: "from-yellow-500 to-orange-500",
        items: [
            {
                label: "Meta Front-End Development Professional Certificate (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/specialization/meta-frontend"
            },
            {
                label: "Oracle SQL Database (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/certificate/oracle-sql"
            },
            {
                label: "Cybersecurity for Everyone (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/certificate/cybersecurity-everyone"
            },
            {
                label: "Hands-on to Linux Commands and Shell Scripting (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/certificate/linux-shell"
            },
            {
                label: "React Basics (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/certificate/react-basics"
            },
            {
                label: "Advanced CSS (Coursera)",
                url: "https://www.coursera.org/account/accomplishments/certificate/advanced-css"
            }
        ]
    }
];

const Achievements = () => {
    return (
        <div className="h-full bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                        <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Achievements</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        const isScrollable = section.name === "Certifications" || section.name === "Research Papers";
                        return (
                            <div
                                key={index}
                                className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 relative"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="text-white font-semibold text-lg mt-1">{section.name}</h4>
                                </div>

                                <ul
                                    className={`space-y-4 text-base text-gray-300 pr-2 ${isScrollable ? "max-h-56 overflow-y-auto thin-scrollbar" : ""
                                        }`}
                                >
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="flex flex-col gap-1">
                                            {item.url ? (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base text-blue-400 hover:underline inline-flex items-center gap-2 font-medium"
                                                >
                                                    {item.label}
                                                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                                                </a>
                                            ) : (
                                                <span className="text-base font-medium text-white">{item.label}</span>
                                            )}
                                            {item.details && (
                                                <span className="text-sm text-gray-400 pl-1">{item.details}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
