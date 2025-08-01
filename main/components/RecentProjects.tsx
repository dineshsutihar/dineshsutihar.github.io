"use client"
import { projects, type Project } from '@/data'
import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { CardCarousel } from './ui/card-carousel';
import { Button } from './ui/MovingBorders';


const RecentProjects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <section className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" id="recent-projects">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                        Recent Projects
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        A curated selection of my recent work, showcasing innovative solutions and cutting-edge technologies
                    </p>
                </div>

                <div>
                    <CardCarousel
                        items={projects}
                        autoplayDelay={2000}
                        showPagination={true}
                        showNavigation={true}
                        setSelectedProject={setSelectedProject}
                    />
                    <div className="text-center">
                        <Button variant="outline">
                            <a href="/projects" className="text-primary hover:text-primary/80 transition-colors h-10 w-40 flex items-center justify-center">
                                View All Projects
                            </a>
                        </Button>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div> */}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}

export default RecentProjects