import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

interface SkillSection {
    title: string;
    skills: string[];
    nonSkills: string[];
}
const skills = [
    {
        title: "Coding Languages",
        skills: [
            "Java", "Python", "Javascript", "Go", "Dart", "C", "C++","C#", "RISC-V", "Machine Code"
        ],
        nonSkills: [
            "Symple",
        ],
    },
    {
        title: "Soft Skills",
        skills: [
            "Critical Thinking", "Leadership", "Quick Learner", "Adaptability", "Problem Solving", "Communication", "Logical Reasoning", "Baking"
        ],
        nonSkills: [
            "Napping", "Incessant Humming", "Juggling",
        ],
    },
    {
        title: "Computer Science Skills",
        skills: [
            "Efficient Algorithms",
            "Time and Spacial Complexity",
            "Data Structures",
            "Object Oriented Programming",
            "Functional Programming",
            "Mobile, Web, and Full Stack Development",
            "Computer Security",
            "Artificial Intelligence",
            "Machine Learning",
        ],
        nonSkills: [
            "Proof that P=NP",
            "Traveling Salesman in O(N) time",
        ],
    },
    {
        title: "Math Skills",
        skills: [
            "Calculus",
            "Multivariable Calculus",
            "Linear Algebra",
            "Discrete Math",
            "Real Analysis",
            "Abstract Algebra",
            "Game Theory",
            "Long Division",
        ],
        nonSkills: [
            "Divsision by 0",
            "Solution to the Riemann Hypothesis",
            "Proof of Fermat's Last Theorem",
        ],
    }
];

export default function AboutMe() {
    return (
        <div className="pt-16">
            <Navbar />
            <div className="w-full md:w-3/4 lg:w-3/5 mx-auto mt-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-32">About Me</h1>
                <div className="flex items-center mb-8">
                    <Image
                        src="me2.jfif"
                        width={200}
                        height={0}
                        alt="Me with an 8 pack (of Pepsi)"
                        className="rounded mr-8"
                    />
                    <div>
                        <p className="text-lg mb-6">
                            Hello! I&apos;m Jason Telanoff, a passionate software engineer and a Computer Science and Applied Math double major at UC Berkeley expected to graduate in Fall 2024. I have a strong background in mobile development and efficient algorithms, but enjoy working on a variety of projects.
                        </p>
                        <p className="text-lg mb-6">
                            My journey in software development started in elementary school, when my father showed me a basic Scratch game. Since then, I&apos;ve been eager to learn new technologies and explore innovative solutions to challenging problems.
                        </p>
                        <p className="text-lg mb-6">
                            In addition to coding, I have a keen interest in cooking, Minecraft, and hiking. I believe in continuous learning and strive to improve my skills every day.
                        </p>
                        <p className="text-lg">
                            Feel free to explore my <Link target="_blank" href='/projects' className="text-blue-500 hover:underline">projects</Link> to get a glimpse of my work. If you have any questions or would like to collaborate, don&apos;t hesitate to reach out through the <Link target="_blank" href='/projects' className="text-blue-500 hover:underline">contact</Link> page!
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-300 mx-8 my-16" />
            <section className="body-font">
                <div className="container px-5 pb-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-3xl font-medium text-center title-font mb-4">What I bring to the table</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">(Other than food)</p>
                    </div>
                    <div className="flex flex-wrap justify-center align-top text-lg">
                        {skills.map((skill: SkillSection, index) => (
                            <div key={index} className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                                <h2 className="font-medium title-font tracking-widest mb-4 text-sm text-center sm:text-left">{skill.title}</h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    {skill.skills.map((_skill: string, i) => (
                                        <div key={i}>
                                            <span className="bg-green-100 text-green-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" className="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>
                                            {_skill}
                                        </div>
                                    ))}
                                    {skill.nonSkills.map((_skill: string, j) => (
                                        <div key={j}>
                                            <span className="bg-red-100 text-red-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" className="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </span>
                                            {_skill}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
