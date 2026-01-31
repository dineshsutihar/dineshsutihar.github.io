"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Construction, Search, Filter, X } from "lucide-react";
import { getAllCategories, getAllTags } from "@/data/blogs";

interface BlogHeaderProps {
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export function BlogHeader({
    selectedCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}: BlogHeaderProps) {
    const categories = getAllCategories();
    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className="space-y-6">
            {/* Development Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 p-4"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                        <Construction className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                        <h4 className="text-amber-300 font-semibold">🚧 Section Under Development</h4>
                        <p className="text-amber-200/70 text-sm">
                            This blog section is actively being developed. More content and features coming soon!
                        </p>
                    </div>
                </div>
                {/* Animated gradient background */}
                <div className="absolute inset-0 -z-10 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 animate-pulse" />
                </div>
            </motion.div>

            {/* Header Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
            >
                <div className="text-center space-y-3">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                        Tech Blog
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Insights, tutorials, and deep dives into software development,
                        algorithms, and modern web technologies.
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => onSearchChange("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Filter Toggle */}
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${showFilters || selectedCategory
                                ? "bg-purple-600/20 border-purple-500/50 text-purple-300"
                                : "bg-slate-800/50 border-slate-700/50 text-gray-400 hover:text-white"
                            }`}
                    >
                        <Filter className="w-5 h-5" />
                        <span>Filter</span>
                        {selectedCategory && (
                            <span className="text-xs bg-purple-500 text-white px-2 py-0.5 rounded-full">
                                1
                            </span>
                        )}
                    </button>
                </div>

                {/* Category Filters */}
                {showFilters && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-2"
                    >
                        <button
                            onClick={() => onCategoryChange(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!selectedCategory
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                                    : "bg-slate-800/50 text-gray-400 hover:text-white border border-slate-700/50"
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                                        : "bg-slate-800/50 text-gray-400 hover:text-white border border-slate-700/50"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
