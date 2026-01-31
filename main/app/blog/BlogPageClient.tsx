"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "@/data/blogs";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogCard } from "@/components/blog/BlogCard";
import { FileText } from "lucide-react";

interface BlogPageClientProps {
    blogs: Blog[];
}

export function BlogPageClient({ blogs }: BlogPageClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesCategory = !selectedCategory || blog.category === selectedCategory;
            const matchesSearch =
                !searchQuery ||
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [blogs, selectedCategory, searchQuery]);

    return (
        <div className="space-y-10">
            <BlogHeader
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {/* Blog Grid */}
            <AnimatePresence mode="wait">
                {filteredBlogs.length > 0 ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredBlogs.map((blog, index) => (
                            <BlogCard key={blog.slug} blog={blog} index={index} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="p-4 bg-slate-800/50 rounded-full mb-4">
                            <FileText className="w-8 h-8 text-gray-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                        <p className="text-gray-400 max-w-md">
                            Try adjusting your search or filter criteria to find what you&apos;re looking for.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory(null);
                                setSearchQuery("");
                            }}
                            className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-sm text-gray-500 pt-8 border-t border-slate-800"
            >
                Showing {filteredBlogs.length} of {blogs.length} articles
            </motion.div>
        </div>
    );
}
