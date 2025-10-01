'use client';

import React from "react";
import Particles from "../components/particles";
import Navbar from "@/components/navbar";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const shuffleList = (list: string[]) => {
    const firstElement = list[0];
    const shuffledList = [...list.slice(1)]; // Copy the array excluding the first element

    // Fisher-Yates Shuffle for the rest of the elements
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return [firstElement, ...shuffledList];
  };

  const originalList = ['Software Engineer', 'Mobile Developer', 'Web Developer', 'Full Stack Developer', 'Computer Science Student', 'Math Student', 'Minecrafter', 'Hiker', 'Cook', 'Game Developer', 'UI/UX Designer', 'Critical Thinker', 'Problem Solver', 'Innovator', 'Leader', 'Team Player', 'Learner', 'Teacher', 'Friend', 'Human', 'Computer Graphics Developer', 'non-Artificial Intelligence', 'Computer Securities Developer', 'Computer Architect', 'Hackathon Winner', 'Analyst', 'Cal Graduate (GO BEARS!)', ''];
  const shuffledList = shuffleList(originalList);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-500/5 to-transparent" />

      {/* Navigation */}
      <nav className="relative z-20 my-8 opacity-0 animate-fade-in-delayed">
        <Navbar />
      </nav>

      {/* Decorative Lines */}
      {/* <div className="hidden w-screen h-px md:block opacity-0 animate-fadeleft-delayed bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="hidden w-screen h-px md:block opacity-0 animate-faderight-delayed bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" /> */}

      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-11 opacity-0 animate-fade-in-delayed"
        quantity={200}
        maxSpeed={1.0}
        maxSize={6}
        minSize={2}
        mouseInfluence={40}
        neighbourhoodSize={80}
        tooClose={16}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 animate-title">
          <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-100 dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
            Jason Telanoff
          </span>
        </h1>

        {/* Typewriter */}
        <div className="relative opacity-0 animate-fade-in-delayed">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-blue-500 rounded-lg blur opacity-30 animate-pulse-slow" />
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-large">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 min-h-[2.5rem] flex items-center justify-center">
              <Typewriter
                options={{
                  strings: shuffledList,
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </h2>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 opacity-0 animate-fadeinup-delayed">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-blue-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/connect"
              className="group relative px-8 py-4 border-2 border-accent-500 text-accent-600 dark:text-accent-400 font-semibold rounded-xl hover:bg-accent-500 hover:text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-500/50"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 animate-fade-in-delayed blur-xl" style={{ animationDelay: '4.8s' }} />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-indigo-400 to-pink-500 rounded-full opacity-0 animate-fade-in-delayed blur-xl" style={{ animationDelay: '5.0s' }} />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 animate-fade-in-delayed blur-xl" style={{ animationDelay: '5.2s' }} /> */}
    </div>
  );
}
