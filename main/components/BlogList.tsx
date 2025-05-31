"use client";
import React, { useEffect, useState } from "react";
import { FileText, Clock } from "lucide-react";

interface Blog {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    createdAt?: string;
}

export const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        // dummy fetch for now later this will be replaced with actual API call
        const fetchBlogs = async () => {
            try {
                const dummyBlogs: Blog[] = [
                    {
                        id: "1",
                        title: "Patterns in Data Structures",
                        excerpt: "A comprehensive guide to common patterns in data structures...",
                        content: "",
                        createdAt: new Date().toISOString(),
                    },
                    {
                        id: "2",
                        title: "React Server Components Demystified",
                        excerpt: "Explore how RSCs change the way we build React apps...",
                        content: "",
                        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
                    },
                    {
                        id: "3",
                        title: "Understanding React Hooks",
                        excerpt: "A deep dive into React Hooks and how to use them effectively...",
                        content: "",
                        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
                    },
                ];
                setBlogs(dummyBlogs);
            } catch (err: any) {
                setError("Failed to load blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
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

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-emerald-600 to-lime-600 rounded-lg">
                        <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">Recent Blogs</h3>
                        <p className="text-sm text-gray-400">Latest blog updates</p>
                    </div>
                </div>


                <div className="bg-slate-500/5 rounded-xl p-4 border border-white-500/20">
                    {loading ? (
                        <div className="flex items-center justify-center py-4">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-slate-400"></div>
                        </div>
                    ) : error ? (
                        <div className="text-red-400 text-sm text-center">{error}</div>
                    ) : blogs.length === 0 ? (
                        <div className="text-sm text-gray-400 text-center py-2">
                            No blogs available
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="space-y-1">
                                    <div className="text-white font-medium text-sm">
                                        {blog.title}
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {blog.excerpt}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                        <Clock className="w-3 h-3" />
                                        {formatDate(blog.createdAt)}
                                        <a
                                            href={`/blogs/${blog.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="ml-auto text-emerald-400 hover:underline"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

