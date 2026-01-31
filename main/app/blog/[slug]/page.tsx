import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { blogs, getBlogBySlug, getAllBlogSlugs, getRecentBlogs } from "@/data/blogs";
import { BlogContent } from "@/components/blog/BlogContent";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { BlogCard } from "@/components/blog/BlogCard";
import { Clock, Calendar, ArrowLeft, Share2, User } from "lucide-react";

interface BlogDetailPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog slugs
export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Dinesh Sutihar",
        };
    }

    return {
        title: `${blog.title} | Dinesh Sutihar`,
        description: blog.seoDescription,
        keywords: blog.keywords,
        authors: [{ name: blog.author, url: "https://dineshsutihar.me" }],
        openGraph: {
            title: blog.title,
            description: blog.seoDescription,
            type: "article",
            publishedTime: blog.publishedAt,
            modifiedTime: blog.updatedAt,
            authors: [blog.author],
            url: `https://dineshsutihar.me/blog/${blog.slug}`,
            images: [
                {
                    url: blog.coverImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            tags: blog.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.seoDescription,
            images: [blog.coverImage],
            creator: "@dineshsutihar",
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Get related blogs (same category, excluding current)
    const relatedBlogs = blogs
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);

    // JSON-LD for structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.seoDescription,
        image: blog.coverImage,
        author: {
            "@type": "Person",
            name: blog.author,
            url: "https://dineshsutihar.me",
        },
        publisher: {
            "@type": "Person",
            name: "Dinesh Sutihar",
            url: "https://dineshsutihar.me",
        },
        datePublished: blog.publishedAt,
        dateModified: blog.updatedAt || blog.publishedAt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://dineshsutihar.me/blog/${blog.slug}`,
        },
        keywords: blog.keywords.join(", "),
    };

    return (
        <>
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip min-h-screen">
                <div className="max-w-7xl w-full">
                    <FloatingNav navItems={navItems} />

                    <article className="pt-28 pb-16">
                        {/* Breadcrumb */}
                        <nav className="mb-8">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Blog
                            </Link>
                        </nav>

                        {/* Header */}
                        <header className="mb-10 space-y-6">
                            {/* Category Badge */}
                            <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                                {blog.category}
                            </span>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                {blog.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-400">
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {blog.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(blog.publishedAt)}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {blog.readingTime} min read
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm bg-slate-800/80 text-gray-300 rounded-lg border border-slate-700/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Cover Image */}
                            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50">
                                <img
                                    src={blog.coverImage}
                                    alt={blog.title}
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                        </header>

                        {/* Content with Table of Contents */}
                        <div className="flex gap-8">
                            {/* Main Content - takes all available space */}
                            <div className="flex-1 min-w-0">
                                <BlogContent sections={blog.sections} />
                            </div>
                            {/* Table of Contents - fixed width on right */}
                            <TableOfContents sections={blog.sections} />
                        </div>

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-slate-700/50">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Share this article</span>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://dineshsutihar.me/blog/${blog.slug}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
                                    >
                                        <Share2 className="w-5 h-5 text-gray-400" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedBlogs.length > 0 && (
                            <section className="mt-16 pt-12 border-t border-slate-700/50">
                                <h2 className="text-2xl font-bold text-white mb-8">
                                    Related Articles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {relatedBlogs.map((related, index) => (
                                        <BlogCard key={related.slug} blog={related} index={index} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </article>

                    <Footer />
                </div>
            </main>
        </>
    );
}
