import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export default function Connect() {
    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:json22@berkeley.edu',
            icon: 'emails_icon.png',
            color: 'from-red-500 to-pink-500',
            hoverColor: 'hover:from-red-600 hover:to-pink-600'
        },
        {
            name: 'GitHub',
            href: 'https://github.com/jasonTelanoff',
            icon: 'github_icon.png',
            color: 'from-gray-600 to-gray-800',
            hoverColor: 'hover:from-gray-700 hover:to-gray-900'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jason-telanoff/',
            icon: 'linkedin_icon.png',
            color: 'from-blue-600 to-blue-800',
            hoverColor: 'hover:from-blue-700 hover:to-blue-900'
        },
        {
            name: 'Devpost',
            href: 'https://www.devpost.com/jasonTelanoff',
            icon: 'devpost_icon.png',
            color: 'from-green-500 to-emerald-600',
            hoverColor: 'hover:from-green-600 hover:to-emerald-700'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="pt-16">
                <Navbar />
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                                Connect with Me
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Let&apos;s collaborate and build something amazing together!
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-blue-500 mx-auto rounded-full" />
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Contact Info */}
                        <div className="animate-slide-in-left">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-blue-500 rounded-2xl blur opacity-20" />
                                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-large">
                                    <h2 className="text-3xl font-bold mb-8 text-slate-800 dark:text-slate-200">
                                        Get In Touch
                                    </h2>

                                    {/* Social Links */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group relative p-4 bg-gradient-to-r ${link.color} ${link.hoverColor} rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-large focus:outline-none focus:ring-4 focus:ring-accent-500/50`}
                                            >
                                                <div className="flex items-center justify-center">
                                                    <Image
                                                        src={link.icon}
                                                        width={32}
                                                        height={32}
                                                        alt={link.name}
                                                        className="mr-3 group-hover:scale-110 transition-transform duration-200"
                                                    />
                                                    <span className="text-sm">{link.name}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {/* Resume Download */}
                                    <div className="text-center">
                                        <a
                                            href="Resume 9-29-2025.pdf"
                                            download="Jason_Telanoff.pdf"
                                            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-blue-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-500/50"
                                        >
                                            <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Image */}
                        <div className="animate-slide-in-right">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-blue-500 rounded-2xl blur opacity-20" />
                                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-large">
                                    <Image
                                        src="me2.jfif"
                                        width={400}
                                        height={400}
                                        alt="Me with an 8 pack (of Pepsi)"
                                        className="rounded-xl shadow-medium w-full h-auto object-cover"
                                    />
                                    <div className="mt-6 text-center">
                                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                                            Jason Telanoff
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400">
                                            Software Engineer & CS/Math Student
                                        </p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                                            UC Berkeley
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 text-center animate-fade-in-up">
                        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-medium border border-white/20 dark:border-slate-700/20">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                                Let&apos;s Work Together
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                I&apos;m always excited to discuss new opportunities, collaborate on interesting projects,
                                or simply chat about technology and innovation. Whether you&apos;re looking for a developer,
                                have a project idea, or just want to connect, I&apos;d love to hear from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
