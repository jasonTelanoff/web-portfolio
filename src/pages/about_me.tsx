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
            "Java", "Python", "Javascript", "Go", "Dart", "C", "C++", "C#", "RISC-V", "Machine Code"
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
            "Division by 0",
            "Solution to the Riemann Hypothesis",
            "Proof of Fermat's Last Theorem",
        ],
    }
];

export default function AboutMe() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <div className="pt-16">
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-blue-500 mx-auto rounded-full" />
                    </div>

                    {/* Profile Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="order-2 lg:order-1 animate-slide-in-left">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-blue-500 rounded-2xl blur opacity-20" />
                                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-large">
                                    <Image
                                        src="me2.jfif"
                                        width={300}
                                        height={300}
                                        alt="Me with an 8 pack (of Pepsi)"
                                        className="rounded-xl shadow-medium w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 animate-slide-in-right">
                            <div className="space-y-6 text-lg leading-relaxed">
                                <p className="text-slate-700 dark:text-slate-300">
                                    Hello! I&apos;m <span className="font-semibold text-accent-600 dark:text-accent-400">Jason Telanoff</span>, a passionate software engineer and recent UC Berkeley graduate with a double major in Computer Science and Applied Math. I graduated a year early in Spring 2025, and I have a strong background in mobile and web development, but enjoy working on a variety of projects.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300">
                                    My journey in software development started in elementary school, when my father showed me a basic Scratch game. Since then, I&apos;ve been eager to learn new technologies and explore innovative solutions to challenging problems.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300">
                                    In addition to coding, I have a keen interest in cooking, Minecraft, and hiking. I believe in continuous learning and strive to improve my skills every day.
                                </p>
                                <p className="text-slate-700 dark:text-slate-300">
                                    Feel free to explore my <Link href='/projects' className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-semibold transition-colors duration-200">projects</Link> to get a glimpse of my work. If you have any questions or would like to collaborate, don&apos;t hesitate to reach out through the <Link href='/connect' className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-semibold transition-colors duration-200">contact</Link> page!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="container mx-auto px-4 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                                What I bring to the table
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">(Other than food)</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill: SkillSection, index) => (
                            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="relative h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 border border-white/20 dark:border-slate-700/20">
                                    <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                                        {skill.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {skill.skills.map((_skill: string, i) => (
                                            <div key={i} className="flex items-center group/item">
                                                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                                        <path d="M20 6L9 17l-5-5"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100 transition-colors duration-200">
                                                    {_skill}
                                                </span>
                                            </div>
                                        ))}
                                        {skill.nonSkills.map((_skill: string, j) => (
                                            <div key={j} className="flex items-center group/item">
                                                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
                                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                </div>
                                                <span className="text-slate-500 dark:text-slate-400 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-300 transition-colors duration-200">
                                                    {_skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
