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

  const originalList = ['Software Engineer', 'Mobile Developer', 'Web Developer', 'Full Stack Developer', 'Computer Science Student', 'Math Student', 'Minecrafter', 'Hiker', 'Cook', 'Game Developer', 'UI/UX Designer', 'Critical Thinker', 'Problem Solver', 'Innovator', 'Leader', 'Team Player', 'Learner', 'Teacher', 'Friend', 'Human', 'Graphics Developer'];
  const shuffledList = shuffleList(originalList);

  return (
    <main>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <nav className="my-16 animate-fade-in">
          <Navbar />
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
          maxSpeed={2}
          maxSize={5}
          minSize={2}
          mouseInfluence={50}
          neighbourhoodSize={100}
          tooClose={10}
        />
        <h1 className="z-10 duration-1000 animate-title sm:text-6xl md:text-8xl lg:text-8x1">
          Jason Telanoff
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h2 className="z-10 text-xl duration-1000 animate-fade-in sm:text-1xl md:text-2xl">
          <Typewriter
            options={{
              strings: shuffledList,
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h2>

        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm">
            Now with even more pizzaz!
          </h2>
        </div>
      </div>
    </main>
  );
}
