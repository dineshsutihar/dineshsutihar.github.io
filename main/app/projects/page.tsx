"use client";

import React, { useState, useMemo } from "react";
import { projects, Project } from "@/data";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { motion } from "framer-motion";
import { Filter, Star, Code, Brain, Palette, Server, MoreHorizontal } from "lucide-react";
import Image from "next/image";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
type FilterType = 'all' | 'fullstack' | 'frontend' | 'backend' | 'ai-ml' | 'other';


const filterOptions = [
    { id: 'all' as FilterType, label: 'All Projects', icon: Filter, color: 'from-gray-500 to-gray-600' },
    { id: 'fullstack' as FilterType, label: 'Full Stack', icon: Code, color: 'from-blue-500 to-cyan-600' },
    { id: 'frontend' as FilterType, label: 'Frontend', icon: Palette, color: 'from-pink-500 to-rose-600' },
    { id: 'backend' as FilterType, label: 'Backend', icon: Server, color: 'from-purple-500 to-violet-600' },
    { id: 'ai-ml' as FilterType, label: 'AI/ML', icon: Brain, color: 'from-indigo-500 to-purple-600' },
    { id: 'other' as FilterType, label: 'Other', icon: MoreHorizontal, color: 'from-slate-500 to-gray-600' },
];

export default function ProjectsPage() {
    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [visibleProjects, setVisibleProjects] = useState(6);

    const featuredProjects = useMemo(
        () => projects.filter((p) => p.isFeatured).slice(0, 2),
        []
    );

    const filteredProjects = useMemo(() => {
        let filtered = projects.filter((project) => {
            if (project.isFeatured) return false;
            if (selectedFilter !== 'all') {
                return project.type === selectedFilter;
            }

            return true;
        });

        return filtered.sort((a, b) => b.year - a.year);
    }, [selectedFilter]);

    const projectsToShow = useMemo(() => {
        return filteredProjects.slice(0, visibleProjects);
    }, [filteredProjects, visibleProjects]);

    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 6);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 min-h-screen">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className="py-12">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple to-cyan-500">
                            My Projects
                        </div>
                        <p className="text-xl text-white-200 max-w-3xl mx-auto">
                            Explore my collection of projects ranging from web development to AI/ML applications.
                            Each project represents a unique challenge solved with modern technologies and creative solutions.
                        </p>
                    </motion.div>

                    {featuredProjects.length > 0 && (
                        <motion.section
                            className="mb-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="space-y-16">
                                {featuredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        variants={item}
                                        className={`group w-full flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="relative w-full md:w-1/2 h-80 rounded-2xl overflow-hidden shadow-xl">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>

                                        <div className="w-full md:w-1/2">
                                            <span className="px-3 py-1 bg-purple/20 backdrop-blur-sm border border-purple/30 rounded-full text-xs font-medium text-purple mb-3 inline-block">
                                                {project.category} - {project.year}
                                            </span>
                                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-white-200 mb-6 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.techStack.slice(0, 5).map((tech) => (
                                                    <span key={tech} className="px-2 py-1 bg-white/[0.05] border border-white/[0.1] rounded-md text-xs font-medium text-white-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex flex-wrap gap-3">
                                                {project.chromeUrl && (
                                                    <motion.a
                                                        href={project.chromeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 16l-5-5h3V4h4v7h3l-5 5z" />
                                                            <path d="M20 18H4v-2h16v2z" />
                                                        </svg>
                                                        Download for Chrome
                                                    </motion.a>
                                                )}

                                                {project.edgeUrl && (
                                                    <motion.a
                                                        href={project.edgeUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:shadow-lg transition-all"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 16l-5-5h3V4h4v7h3l-5 5z" />
                                                            <path d="M20 18H4v-2h16v2z" />
                                                        </svg>
                                                        Download for Edge
                                                    </motion.a>
                                                )}

                                                {!project.chromeUrl && !project.edgeUrl && project.liveUrl && (
                                                    <motion.a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <path d="m18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                            <polyline points="15,3 21,3 21,9" />
                                                            <line x1="10" x2="21" y1="14" y2="3" />
                                                        </svg>
                                                        View Website
                                                    </motion.a>
                                                )}

                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 px-4 py-2 bg-black-300 border border-white/[0.1] text-white-200 hover:text-white rounded-full font-medium hover:bg-black-200 transition-all"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                        Source Code
                                                    </motion.a>
                                                )}

                                                <motion.button
                                                    onClick={() => setSelectedProject(project)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/[0.2] text-white-200 hover:text-white rounded-full font-medium hover:border-white/[0.4] transition-all"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                        <circle cx="12" cy="12" r="3" />
                                                    </svg>
                                                    View Details
                                                </motion.button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    <motion.div
                        className="my-20 h-px w-full bg-gradient-to-r from-transparent via-purple to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    />

                    <motion.section
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                            {filterOptions.map((option) => {
                                const Icon = option.icon;
                                const isActive = selectedFilter === option.id;
                                return (
                                    <motion.button
                                        key={option.id}
                                        className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out overflow-hidden group ${isActive
                                            ? 'text-white'
                                            : 'text-white-200 hover:text-white'
                                            }`}
                                        onClick={() => setSelectedFilter(option.id)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${isActive ? `bg-gradient-to-r ${option.color}` : 'bg-black-200 group-hover:bg-black-300 border border-white/[0.1]'}`}></span>
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Icon className="w-5 h-5" />
                                            {option.label}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.section>

                    {/* Projects Grid */}
                    <motion.section
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-semibold text-white">
                                {selectedFilter === 'all'
                                    ? `All Projects (${filteredProjects.length})`
                                    : `${filterOptions.find(f => f.id === selectedFilter)?.label} (${filteredProjects.length})`
                                }
                            </h2>
                            {filteredProjects.length > 0 && (
                                <div className="text-sm text-white-200">
                                    Sorted by latest first
                                </div>
                            )}
                        </div>

                        <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {projectsToShow.map((project, index) => (
                                <motion.div key={project.id} variants={item}>
                                    <ProjectCard
                                        project={project}
                                        index={index}
                                        onClick={() => setSelectedProject(project)}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {visibleProjects < filteredProjects.length && (
                            <div className="text-center mt-12">
                                <motion.button
                                    onClick={handleLoadMore}
                                    className="px-8 py-3 bg-gradient-to-r from-purple to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Load More
                                </motion.button>
                            </div>
                        )}
                    </motion.section>

                    {/* Project Modal */}
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </div>
                <Footer />
            </div>
        </main>
    );
}
