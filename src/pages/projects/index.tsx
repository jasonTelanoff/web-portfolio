import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { Project, projects } from '../../components/project_list';
import Footer from '@/components/footer';

const Projects = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="pt-16">
                <Navbar />
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            There are many more projects on my&nbsp;
                            <Link href="https://github.com/jasonTelanoff" target="_blank" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-semibold transition-colors duration-200">GitHub</Link> and&nbsp;
                            <Link href="https://www.devpost.com/jasonTelanoff" target="_blank" className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-semibold transition-colors duration-200">Devpost</Link>!
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-blue-500 mx-auto rounded-full" />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project: Project, index) => (
                            <div
                                key={index}
                                className="group animate-fade-in-up hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 border border-white/20 dark:border-slate-700/20 overflow-hidden">
                                    {/* Project Status Badge */}
                                    {project.in_progress && (
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                                                In Progress
                                            </span>
                                        </div>
                                    )}

                                    {/* Language Badge */}
                                    <div className="mb-4">
                                        <span
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white"
                                            style={{ backgroundColor: project.languageColor }}
                                        >
                                            {project.language}
                                        </span>
                                    </div>

                                    {/* Project Title */}
                                    <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                                        {project.title}
                                    </h2>

                                    {/* Project Description */}
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Action Links */}
                                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                                        {project.githubLink && (
                                            <Link
                                                href={project.githubLink}
                                                target="_blank"
                                                className="group/link flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </Link>
                                        )}

                                        {project.demoLink && (
                                            <Link
                                                href={project.demoLink}
                                                target="_blank"
                                                className="group/link flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                View Project
                                            </Link>
                                        )}
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Projects;
