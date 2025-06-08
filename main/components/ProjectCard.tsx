import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../data';

interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
    return (
        <div
            className="group relative bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/30"
            style={{
                animationDelay: `${index * 150}ms`,
            }}
            onClick={onClick}
        >
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-background/20 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-background/40 transition-colors"
                        >
                            <Github className="w-4 h-4 text-foreground" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-background/20 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-background/40 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4 text-foreground" />
                        </a>
                    )}
                </div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-2 sm:px-3 py-1 bg-slate-400/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs font-medium text-primary">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2 md:h-14">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground">
                            +{project.techStack.length - 3}
                        </span>
                    )}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-primary/10 border border-primary/30 rounded-lg text-primary font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 group-hover:shadow-lg text-sm sm:text-base">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
            </div>
        </div>
    );
};
