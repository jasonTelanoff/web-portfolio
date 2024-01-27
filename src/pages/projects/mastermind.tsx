import React from "react";
import MastermindGame from "@/components/mastermind";
import Navbar from "@/components/navbar";

export default function Mastermind() {
    return (
        <div className="mx-32 p-16 flex flex-col items-center justify-center align-middle">
            <Navbar />
            <h1 className="text-4xl my-8">Mastermind</h1>
            <p className="mb-8">A simple Mastermind game with a history. I coded this over half a decade ago over a weekend in Khan Academy&apos;s processing.js. It&apos;s fascinating to revisit what I once considered cutting-edge tricks and techniques. To provide a playable demo here, I had to convert it to p5.js and then integrate it into React.

                The game interface is currently aligned to the bottom left due to the package I&apos;m using for integration. I may explore alternatives in the future, so stay tuned for updates!

                I also didn&apos;t optimize the code for efficiency, so what you experience here is essentially what&apos; on the GitHub repository. Perhaps in the future, I&apos;ll create a modernized version. Enjoy the game!
            </p>
            <p>
                How to play: The point of the game is to figure out the computer&apos;s randomly chosen balls. Colors can appear more than once. You get an unlimited number of guesses. After each guess, the computer will respond with how well you did.
                The black number represents how many balls are the right color in the right spot, and the white number represents the right balls in the wrong spot. Balls can not be counted more than once. Use logic and deductive reasoning to figure out the computer&apos;s selection!
            </p>

            <MastermindGame />
        </div>

    );
}
