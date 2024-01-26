// components/Projects.js
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { projects } from '../../components/project_list';

const Projects = () => {
    return (
        <div className="container mx-auto my-16 px-4 pb-8 font-sourceCode h-screen">
            <Navbar />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 col-span-full">Projects</h1>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg">
                        <div className="flex flex-row items-start mb-2">
                            <h2 className="text-2xl font-bold">{project.title} |&nbsp;</h2>
                            <p>
                                {project.language}
                            </p>
                        </div>
                        {project.in_progress && (
                            <p className="text-orange-500 mb-2">In Progress</p>
                        )}
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="flex flex-row gap-4">
                            {project.demoLink && (
                                <Link target="_blank" href={project.demoLink} passHref>
                                    <p className="text-blue-500">
                                        Demo
                                    </p>
                                </Link>
                            )}
                            {project.githubLink && (
                                <Link target="_blank" href={project.githubLink} passHref>
                                    <p className="text-blue-500">
                                        GitHub
                                    </p>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
