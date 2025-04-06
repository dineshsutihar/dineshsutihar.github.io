"use client";
import React from 'react';
import { X, Github, ExternalLink, Code, Play, CheckCircle, Calendar, Target } from 'lucide-react';
import { Project } from '../data';
import Image from 'next/image';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-6xl max-h-[80vh] bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
                <button
                    onClick={onClose}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 p-2 bg-background/80 backdrop-blur-sm border border-border rounded-full hover:bg-background transition-colors"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </button>

                <div className="flex flex-col lg:flex-row h-full max-h-[95vh]">
                    <div className="lg:w-1/2 relative">
                        <div className="h-48 sm:h-64 lg:h-full relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                            {project.video && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="p-3 sm:p-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full hover:bg-primary/30 transition-colors">
                                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                                    </button>
                                </div>
                            )}

                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-500/20 backdrop-blur-sm border border-primary/30 rounded-full text-sm font-medium text-primary">
                                    {project.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
                                    {project.title}
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm sm:text-base"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm sm:text-base"
                                    >
                                        <Github className="w-4 h-4" />
                                        Source Code
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-border rounded-lg hover:bg-muted/50 transition-colors text-sm sm:text-base"
                                    >
                                        <Code className="w-4 h-4" />
                                        Demo
                                    </a>
                                )}
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    Key Features
                                </h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {project.challenges && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                                        <Target className="w-5 h-5 text-primary" />
                                        Challenges & Solutions
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {project.outcome && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        Outcome & Impact
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                        {project.outcome}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};