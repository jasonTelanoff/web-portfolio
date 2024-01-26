import React from "react";
import Particles from "../components/particles";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden font-sourceCode">
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
        <h1 className="z-10 text-x4 duration-1000 animate-title sm:text-1xl md:text-8xl">
          Jason Telanoff
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

        <h2 className="z-10 text-xl duration-1000 animate-fade-in font-display sm:text-1xl md:text-2xl">
          Software Engineer
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
