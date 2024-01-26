import Navbar from '@/components/navbar';
import React from 'react';

export default function Connect() {
    return (
        <div className="h-screen m-16">
            <Navbar />
            <div className="container mx-auto my-8 p-8 max-w-md shadow-md rounded-md">
                <h1 className="text-4xl font-bold mb-6">Connect with Me</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Emails:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
                                your.email@example.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="mailto:another.email@example.com" className="text-blue-500 hover:underline">
                                another.email@example.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Social Links:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Discord
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://devpost.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Devpost
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Resume:</h2>
                    <p className="mb-4">Download my resume:</p>
                    <a
                        href="/path/to/your/resume.pdf"  // Replace with the actual path to your resume
                        download="Your_Name_Resume.pdf"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};
