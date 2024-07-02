import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";

export default function Connect() {
    return (
        <div className="mx-16 pt-16 h-screen flex flex-col justify-between">
            <Navbar />
            <div className="container mx-auto my-8 p-8 shadow-md rounded-md font-informal">
                <h1 className="text-4xl font-bold mb-6 text-center">Connect with Me</h1>

                <div className="grid grid-cols-6 gap-4 mx-auto">
                    <div className="col-span-4 md:col-span-2 mb-8 border border-gray-300 rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/web-portfolio/emails_icon.png"
                                width={50}
                                height={50}
                                alt="Emails"
                                className="rounded"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <p>
                            <Link href="mailto:jason.telanoff@gmail.com" target="_blank" className="text-blue-500 hover:underline">
                                jason.telanoff@gmail.com
                            </Link>
                        </p>
                        <p>
                            <Link href="mailto:json22@berkeley.edu" target="_blank" className="text-blue-500 hover:underline">
                                json22@berkeley.edu
                            </Link>
                        </p>
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-8 border border-gray-300 rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/web-portfolio/links_icon.png"
                                width={50}
                                height={40}
                                alt="Socials"
                                className="rounded"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="inline-block">
                                <a href="https://github.com/jasonTelanoff" target="_blank">
                                    <Image
                                        src="/web-portfolio/github_icon.png"
                                        width={40}
                                        height={40}
                                        alt="GitHub"
                                        className="rounded"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div className="inline-block">
                                <a href="https://www.linkedin.com/in/jason-telanoff/" target="_blank">
                                    <Image
                                        src="/web-portfolio/linkedin_icon.png"
                                        width={40}
                                        height={40}
                                        alt="LinkedIn"
                                        className="rounded"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div className="inline-block">
                                <a href="https://www.devpost.com/jasonTelanoff" target="_blank">
                                    <Image
                                        src="/web-portfolio/devpost_icon.png"
                                        width={50}
                                        height={50}
                                        alt="Devpost"
                                        className="rounded"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-8 border border-gray-300 rounded-lg p-6">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/web-portfolio/document_icon.png"
                                width={50}
                                height={50}
                                alt="Resume"
                                className="rounded"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <a
                            href="Resume 7-1-24.pdf"
                            download="Jason_Telanoff.pdf"
                            className="text-blue-500 hover:underline block"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
