import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Mastermind() {
    return (
        <div className="mx-32 p-16 flex flex-col items-center justify-center align-middle">
            <Navbar />
            <h1 className="text-6xl my-8 font-bold">Cofu</h1>

            <p>
                Inspired by California`&apos;s cottage kitchen program, Cofu (Community-Food) emerged as a cross-platform mobile marketplace during HackSC, USC`&apos;s intense 36-hour hackathon. In a team of 3, I played dual roles – project manager and mobile developer. Despite the COVID-induced distance, our teamwork clinched us the vertical winner spot. It was a pivotal experience, giving me the chops to navigate large projects seamlessly. This hackathon wasn`&apos;t just about coding; it was a lesson in leadership and the first app where I confidently steered a ship through the hackathon storm.
            </p>

            <p>
                Learn more on our <Link target="_blank" href="https://devpost.com/software/cofu" className="text-blue-500 hover:underline font-bold">Devpost</Link> page!
            </p>

            <div className="flex flex-row mt-16">
                <div className="my-auto" style={{ height: "400px", marginRight: "16px" }}>
                    <Image
                        src="../cofu_logo.png"
                        width={400}
                        height={400}
                        alt="Cofu UI, available on iOS and Android."
                        className="rounded"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <Image
                    src="../cofu_ios_android.png"
                    width={800}
                    height={200}
                    alt="Cofu UI, available on iOS and Android."
                    className="rounded"
                    style={{ objectFit: "cover" }}
                />
            </div>

        </div >
    );
}
