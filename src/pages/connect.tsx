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
                <div className="flex">
                    <div className="w-2/3 p-4">
                        <h1 className="text-4xl font-bold mb-6">Connect with Me</h1>
                        <div className="flex space-x-4">
                            <div className="inline-block">
                                <a href="mailto:json22@berkeley.edu" target="_blank">
                                    <Image
                                        src="emails_icon.png"
                                        width={45}
                                        height={45}
                                        alt="Email"
                                        className="rounded"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                            <div className="inline-block">
                                <a href="https://github.com/jasonTelanoff" target="_blank">
                                    <Image
                                        src="github_icon.png"
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
                                        src="linkedin_icon.png"
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
                                        src="devpost_icon.png"
                                        width={40}
                                        height={40}
                                        alt="Devpost"
                                        className="rounded"
                                        style={{ objectFit: "cover" }}
                                    />
                                </a>
                            </div>
                        </div>
                        <a
                            href="Resume 8-17-24.pdf"
                            download="Jason_Telanoff.pdf"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 inline-block"
                        >
                            Download Resume
                        </a>
                    </div>
                    <div className="w-1/3 p-4">
                        <Image
                            src="me2.jfif"
                            width={200}
                            height={0}
                            alt="Me with an 8 pack (of Pepsi)"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
