import React from "react";
import { Trophy, ExternalLink } from "lucide-react";

import { sections } from "@/data/index";

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
