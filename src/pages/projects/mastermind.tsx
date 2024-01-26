import React from "react";
import MastermindGame from "@/components/mastermind";
import Navbar from "@/components/navbar";

export default function Mastermind() {
    return (
        <div className="mx-32 p-16 flex flex-col items-center justify-center align-middle">
            <Navbar />
            <h1 className="text-4xl my-8">Mastermind</h1>
            <p className="text-lg mb-8">A simple Mastermind game with a history. I coded this over half a decade ago over a weekend in Khan Academy's processing js.
                It's really cool to see what I used to believe were cutting edge tricks and techniques. In order to have a playable demo here, I had to convert it to p5.js and then bring that into react.
                It's stuck to the left because of the package I'm using to do this. I might make do this without the package in the future, so stay tuned!
                I didn't make the code more efficient, so what you're playing with here is practically what is shown on the github.
                Maybe I'll make a modern version in the future. Enjoy!</p>

            <MastermindGame />
        </div>

    );
}
