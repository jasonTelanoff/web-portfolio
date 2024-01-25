import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden from-black via-zinc-600/20 to-black">
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
          mouseInfluence={0}
          neighbourhoodSize={100}
          tooClose={10}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text ">
          Jason Telanoff
        </h1>
        <h2 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text ">
          Software Engineer
        </h2>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            Now with even more pizzaz!
          </h2>
        </div>
      </div>
    </main>
  );
}
