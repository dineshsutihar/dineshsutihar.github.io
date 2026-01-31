import { Metadata } from "next";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { blogs, getAllCategories } from "@/data/blogs";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
    title: "Tech Blog | Dinesh Sutihar",
    description: "Insights, tutorials, and deep dives into software development, algorithms, React, Node.js, TypeScript, and modern web technologies.",
    keywords: [
        "tech blog",
        "software development",
        "react tutorials",
        "node.js",
        "typescript",
        "web development",
        "programming",
        "coding tutorials",
        "data structures",
        "algorithms"
    ],
    openGraph: {
        title: "Tech Blog | Dinesh Sutihar",
        description: "Insights, tutorials, and deep dives into software development, algorithms, and modern web technologies.",
        type: "website",
        url: "https://dineshsutihar.me/blog",
        images: [
            {
                url: "https://dineshsutihar.me/logo.png",
                width: 800,
                height: 600,
                alt: "Dinesh Sutihar Tech Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Blog | Dinesh Sutihar",
        description: "Insights, tutorials, and deep dives into software development and modern web technologies.",
        images: ["https://dineshsutihar.me/logo.png"],
    },
};

export default function BlogPage() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip min-h-screen">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />

                <div className="pt-28 pb-16">
                    <BlogPageClient blogs={blogs} />
                </div>

                <Footer />
            </div>
        </main>
    );
}