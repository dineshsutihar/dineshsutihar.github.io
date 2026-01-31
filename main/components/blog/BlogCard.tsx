"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
    blog: Blog;
    index?: number;
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative"
        >
            <Link href={`/blog/${blog.slug}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 backdrop-blur-sm h-full">
                    {/* Cover Image */}
                    <div className="relative h-48 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${blog.coverImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                                {blog.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                            {blog.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-400 text-sm line-clamp-2">
                            {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 text-xs bg-slate-800/80 text-gray-300 rounded-md border border-slate-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                            {blog.tags.length > 3 && (
                                <span className="px-2 py-1 text-xs text-gray-500">
                                    +{blog.tags.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(blog.publishedAt)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {blog.readingTime} min read
                                </span>
                            </div>

                            <span className="flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                                Read
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
