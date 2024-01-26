import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function AboutMe() {
    return (
        <main className="container mx-auto my-16 h-screen">
            <Navbar />
            <div className="w-full md:w-3/4 lg:w-3/5 mx-auto mt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-32">About Me</h1>
                <div className="flex items-center mb-8">
                    <Image
                        src="me.png"
                        width={300}
                        height={200}
                        alt="Me with an 8 pack (of Pepsi)"
                        className="rounded mr-8"
                    />
                    <div>
                        <p className="text-lg mb-6">
                            Hello! I&apos;m Jason Telanoff, a passionate software engineer and a Computer Science and Applied Math double major at UC Berkeley expected to graduate in Spring 2025. I have a strong background in mobile development and efficient algorithms, but enjoy working on a variety of projects.
                        </p>
                        <p className="text-lg mb-6">
                            My journey in software development started in elementary school, when my father showed me a basic Scratch game. Since then, I&apos;ve been eager to learn new technologies and explore innovative solutions to challenging problems.
                        </p>
                        <p className="text-lg mb-6">
                            In addition to coding, I have a keen interest in cooking, Minecraft, and hiking. I believe in continuous learning and strive to improve my skills every day.
                        </p>
                        <p className="text-lg">
                            Feel free to explore my projects to get a glimpse of my work. If you have any questions or would like to collaborate, don&apos;t hesitate to reach out through the contact page!
                        </p>
                    </div>
                </div>
                *Note: This website is still under construction and the image WILL be replaced with a better one soon!
            </div>
        </main>
    );
}
