// components/Projects.js
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { Project, projects } from '../../components/project_list';
import Footer from '@/components/footer';

const Projects = () => {
    return (
        <div className='flex flex-col justify-between'>
            <div className="container mx-auto my-16 px-4 pb-8 font-sourceCode">
                <Navbar />

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 col-span-full">Projects</h1>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: Project, index) => (
                        <div key={index} className={`p-4 border-2 rounded-lg flex flex-col justify-between`} style={{ borderColor: project.color ?? project.languageColor }}>
                            <div>
                                <div className="flex flex-row mb-2 align-bottom">
                                    <h2 className="text-2xl font-bold">{project.title}</h2>
                                    <div className="w-px bg-gray-300 mx-4" />
                                    <p style={{ color: project.languageColor }}>{project.language}</p>
                                </div>
                                {project.in_progress && (
                                    <p className="text-orange-500 mb-2">In Progress</p>
                                )}
                                <p className="text-gray-600 mb-4">{project.description}</p>
                            </div>

                            <div className="flex flex-row justify-between">
                                {project.githubLink && (
                                    <Link target="_blank" href={project.githubLink} passHref>
                                        <p className="text-blue-500">
                                            GitHub
                                        </p>
                                    </Link>
                                )}
                                <div />
                                {project.demoLink && (
                                    <Link target="_blank" href={project.demoLink} passHref>
                                        <p className="text-blue-500">
                                            See More
                                        </p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))
                    }
                </div >
            </div >
            <Footer />
        </div>
    );
};

export default Projects;
