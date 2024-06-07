import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';

export default function Connect() {
    return (
        <div className="mx-16 pt-16 h-screen flex flex-col justify-between">
            <Navbar />
            <div className="container mx-auto my-8 p-8 max-w-md shadow-md rounded-md font-informal">
                <h1 className="text-4xl font-bold mb-6">Connect with Me</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Emails:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <Link href="mailto:jason.telanoff@gmail.com" target="_blank" className="text-blue-500 hover:underline">
                                jason.telanoff@gmail.com
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="mailto:json22@berkeley.edu" target="_blank" className="text-blue-500 hover:underline">
                                json22@berkeley.edu
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Social Links:</h2>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">
                            <Link href="https://github.com/jasonTelanoff" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                GitHub
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="https://www.linkedin.com/in/jason-telanoff/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                LinkedIn
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="https://www.devpost.com/jasonTelanoff" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Devpost
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Resume:</h2>
                    <p className="mb-4">Download my resume:</p>
                    <a
                        href="Resume 6-7-24.pdf"  // Replace with the actual path to your resume
                        download="Jason_Telanoff.pdf"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
