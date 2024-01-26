import Navbar from '@/components/navbar';
import React from 'react';

export default function Connect() {
    return (
        <div className="h-screen m-16">
            <Navbar />
            <div className="container mx-auto my-8 p-8 max-w-md shadow-md rounded-md">
                <h1 className="text-4xl font-bold mb-6">Connect with Me</h1>
                <p>*Note: I don&apos;t like this page&apos;s UI as much as you.</p>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Emails:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <a href="mailto:jason.telanoff@gmail.com" className="text-blue-500 hover:underline">
                                jason.telanoff@gmail.com
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="mailto:json22@berkeley.edu" className="text-blue-500 hover:underline">
                                json22@berkeley.edu
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Social Links:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <a href="https://github.com/jasonTelanoff" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                GitHub
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.linkedin.com/in/jason-telanoff/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="devpost.com/jasonTelanoff" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
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
