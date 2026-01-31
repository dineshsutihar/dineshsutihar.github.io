"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List } from "lucide-react";
import { ContentSection } from "@/data/blogs";

interface TableOfContentsProps {
    sections: ContentSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    // Extract headings from sections
    const headings = sections
        .filter((s) => s.type === "heading" && s.content)
        .map((s) => ({
            id: s.content!.toLowerCase().replace(/\s+/g, "-"),
            text: s.content!,
            level: s.level || 2,
        }));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -66%" }
        );

        headings.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const y = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    if (headings.length < 2) return null;

    return (
        <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block sticky top-24 w-64 ml-8 shrink-0"
        >
            <div className="p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700/50">
                    <List className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">Table of Contents</span>
                </div>

                <ul className="space-y-1">
                    {headings.map(({ id, text, level }) => (
                        <li key={id}>
                            <button
                                onClick={() => scrollToSection(id)}
                                className={`w-full text-left text-sm py-1.5 px-2 rounded-lg transition-all duration-200 ${level === 3 ? "pl-4" : level === 4 ? "pl-6" : ""
                                    } ${activeId === id
                                        ? "text-purple-400 bg-purple-500/10 font-medium"
                                        : "text-gray-400 hover:text-white hover:bg-slate-800/50"
                                    }`}
                            >
                                <span className="line-clamp-2">{text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
