"use client";
import React from "react";
import Link from "next/link";
import { FileText, Clock, ArrowRight } from "lucide-react";
import { getRecentBlogs } from "@/data/blogs";

export const BlogList = () => {
    const blogs = getRecentBlogs(3);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return "1 day ago";
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    };

    return (
        <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 relative min-h-full col-span-1 md:col-span-2">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative z-10 space-y-6">

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-emerald-600 to-lime-600 rounded-lg">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Recent Blogs</h3>
                            <p className="text-sm text-gray-400">Latest articles</p>
                        </div>
                    </div>
                    <Link
                        href="/blog"
                        className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        View all
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>


                <div className="bg-slate-500/5 rounded-xl p-4 border border-white-500/20">
                    {blogs.length === 0 ? (
                        <div className="text-sm text-gray-400 text-center py-2">
                            No blogs available
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {blogs.map((blog) => (
                                <Link
                                    key={blog.slug}
                                    href={`/blog/${blog.slug}`}
                                    className="block group"
                                >
                                    <div className="space-y-1 p-2 -mx-2 rounded-lg hover:bg-slate-800/30 transition-colors">
                                        <div className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                                            {blog.title}
                                        </div>
                                        <div className="text-gray-400 text-xs line-clamp-2">
                                            {blog.excerpt}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                            <Clock className="w-3 h-3" />
                                            {formatDate(blog.publishedAt)}
                                            <span className="ml-auto text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                Read more →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
