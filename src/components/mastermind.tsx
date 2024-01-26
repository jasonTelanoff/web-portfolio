import React, { useState, useEffect } from 'react';
import p5Types from "p5";
// import Sketch from "react-p5";

import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})

interface ComponentProps {
    // Your component props
}

const MastermindGame: React.FC<ComponentProps> = (props: ComponentProps) => {
    let heightValue = 150;
    let answer: any[] = [];
    let guesses: any[] = [[]];
    let guessNum = 0;
    let spot = 0;
    let restartConfirm = false;
    let rNum = [74, 65, 83, 79, 78];
    let rCurrent = 0;
    let usedAns: any[] = [];
    let usedGue: any[] = [];
    let rightPos: any[] = [];
    let rightCol: any[] = [];
    let winToggle = false;
    let scores: any[] = [];

    const setup = (p: p5Types, canvasParentRef: Element) => {
        const cnv = p.createCanvas(250, heightValue).parent(canvasParentRef);
        cnv.mousePressed((event) => {
            console.log(event);

            const mouseX = event.offsetX;
            const mouseY = event.offsetY;

            if (winToggle) {
                if (
                    mouseX > 45 &&
                    mouseX < 405 &&
                    mouseY > heightValue - 70 &&
                    mouseY < heightValue - 30
                ) {
                    winToggle = false;
                    restart(p);
                }
            } else if (restartConfirm) {
                if (
                    mouseX > 45 &&
                    mouseX < 220 &&
                    mouseY > heightValue - 70 &&
                    mouseY < heightValue - 30
                ) {
                    restartConfirm = false;
                } else if (
                    mouseX > 230 &&
                    mouseX < 405 &&
                    mouseY > heightValue - 70 &&
                    mouseY < heightValue - 30
                ) {
                    restart(p);
                }
            } else {
                console.log(mouseX, mouseY);
                for (let m = 0; m <= 9; m++) {
                    if (
                        mouseX > 45 * m + 8 &&
                        mouseX < 45 * m + 38 &&
                        mouseY > heightValue - 35 &&
                        mouseY < heightValue - 5
                    ) {
                        if (m === 9) {
                            guesses[guessNum][spot] = 0;
                        } else {
                            guesses[guessNum][spot] = m + 1;
                        }
                    }
                }
                for (let s = 0; s <= 4; s++) {
                    if (
                        mouseX > s * 75 + 25 &&
                        mouseX < s * 75 + 75 &&
                        mouseY > heightValue - 130 &&
                        mouseY < heightValue - 70
                    ) {
                        spot = s;
                    }
                }

                if (
                    mouseX > 390 &&
                    mouseX < 440 &&
                    mouseY > heightValue - 130 &&
                    mouseY < heightValue - 100
                ) {
                    check();
                    guessNum++;
                    guesses.push([1, 1, 1, 1, 1]);
                    rightPos.push(0);
                    rightCol.push(0);
                    usedAns = [false, false, false, false, false];
                    usedGue = [false, false, false, false, false];
                    heightValue += 60;
                    if (rightPos[guessNum - 1] === 5) {
                        winToggle = true;
                        scores.push(guessNum);
                    }
                }

                if (
                    mouseX > 390 &&
                    mouseX < 440 &&
                    mouseY > heightValue - 98 &&
                    mouseY < heightValue - 68
                ) {
                    restartConfirm = true;
                }
            }
        });
        // cnv.keyPressed = (p: p5Types) => {
        //     if (p.keyCode === rNum[rCurrent]) {
        //         if (rCurrent === 4) {
        //             guesses[guessNum] = answer;
        //         } else {
        //             rCurrent++;
        //         }
        //     } else if (winToggle) {
        //         winToggle = false;
        //         restart(p);
        //     } else if (restartConfirm) {
        //         if (p.keyCode === 10) {
        //             restart(p);
        //         } else {
        //             restartConfirm = false;
        //         }
        //     } else {
        //         if (p.keyCode === p.LEFT_ARROW) {
        //             spot -= 1;
        //             if (spot < 0) {
        //                 spot = 4;
        //             }
        //         } else if (p.keyCode === p.RIGHT_ARROW) {
        //             spot += 1;
        //             if (spot > 4) {
        //                 spot = 0;
        //             }
        //         } else if (p.keyCode >= 48 && p.keyCode <= 57) {
        //             guesses[guessNum][spot] = p.keyCode - 48;
        //         } else if (p.keyCode === p.ENTER) {
        //             check();
        //             guessNum++;
        //             guesses.push([1, 1, 1, 1, 1]);
        //             rightPos.push(0);
        //             rightCol.push(0);
        //             usedAns = [false, false, false, false, false];
        //             usedGue = [false, false, false, false, false];
        //             heightValue += 60;
        //             if (rightPos[guessNum - 1] === 5) {
        //                 winToggle = true;
        //                 scores.push(guessNum);
        //             }
        //         } else if (p.keyCode === 82) {
        //             restartConfirm = true;
        //         }
        //     }
        // };
        // p.frameRate(30);
        restart(p);
    };

    const ranNum = (p: p5Types) => {
        return p.round(p.random(0.5, 9.49));
    };

    const restart = (p: p5Types) => {
        restartConfirm = false;
        heightValue = 150;
        answer = [ranNum(p), ranNum(p), ranNum(p), ranNum(p), ranNum(p)];
        guesses = [[1, 1, 1, 1, 1]];
        guessNum = 0;
        usedAns = [false, false, false, false, false];
        usedGue = [false, false, false, false, false];
        rightPos = [0];
        rightCol = [0];
    };

    const check = () => {
        for (let i = 0; i <= 4; i++) {
            if (
                usedGue[i] === false &&
                usedAns[i] === false &&
                answer[i] === guesses[guessNum][i]
            ) {
                rightPos[guessNum]++;
                usedGue[i] = true;
                usedAns[i] = true;
            }
        }
        for (let j = 0; j <= 4; j++) {
            for (let i = 0; i <= 4; i++) {
                if (
                    usedGue[i] === false &&
                    usedAns[j] === false &&
                    answer[j] === guesses[guessNum][i]
                ) {
                    rightCol[guessNum]++;
                    usedGue[i] = true;
                    usedAns[j] = true;
                }
            }
        }
    };

    const averageScore = (p: p5Types) => {
        let addSoFar = 0;
        for (var a = 0; a < scores.length; a++) {
            addSoFar += scores[a];
        }
        addSoFar = p.round(addSoFar / scores.length);
        return addSoFar;
    };

    const draw = (p: p5Types) => {
        p.createCanvas(450, heightValue);
        p.background(180, 120, 0);
        p.strokeWeight(10);
        p.stroke(100, 80, 0);
        p.line(370, 0, 370, heightValue);
        p.line(80, 0, 80, heightValue);
        p.stroke(180, 120, 0);
        p.line(370, heightValue - 150, 370, heightValue);
        p.line(80, heightValue - 150, 80, heightValue);
        p.stroke(100, 80, 0);
        p.line(0, heightValue - 150, 450, heightValue - 150);

        p.noStroke();
        p.fill(130, 70, 0);
        p.ellipse(23, heightValue - 30, 30, 30);
        p.fill(255, 0, 0);
        p.ellipse(68, heightValue - 30, 30, 30);
        p.fill(255, 128, 0);
        p.ellipse(113, heightValue - 30, 30, 30);
        p.fill(255, 255, 0);
        p.ellipse(158, heightValue - 30, 30, 30);
        p.fill(0, 255, 0);
        p.ellipse(203, heightValue - 30, 30, 30);
        p.fill(0, 255, 255);
        p.ellipse(248, heightValue - 30, 30, 30);
        p.fill(0, 0, 255);
        p.ellipse(293, heightValue - 30, 30, 30);
        p.fill(255, 0, 255);
        p.ellipse(338, heightValue - 30, 30, 30);
        p.fill(0, 0, 0);
        p.ellipse(383, heightValue - 30, 30, 30);
        p.fill(255, 255, 255);
        p.ellipse(428, heightValue - 30, 30, 30);

        p.fill(0);
        p.textSize(20);
        for (let v = 1; v <= 8; v++) {
            p.text(v, (v - 1) * 45 + 17, heightValue - 23);
        }
        p.text("0", 422, heightValue - 23);
        p.fill(255);
        p.text("9", 377, heightValue - 23);

        p.fill(100, 80, 0);
        p.rect(390, heightValue - 130, 50, 30, 20);
        p.rect(390, heightValue - 98, 50, 30, 20);
        p.fill(255, 255, 0);
        p.textSize(12);
        p.text("CHECK", 394, heightValue - 111);
        p.fill(255, 100, 100);
        p.textSize(10);
        p.text("RESTART", 393, heightValue - 80);

        p.fill(100, 80, 0);
        for (let b = 0; b < 5; b++) {
            p.ellipse(b * 75 + 50, heightValue - 100, 60, 60);
        }

        p.fill(255, 250, 0);
        p.noStroke();
        p.ellipse(spot * 75 + 50, heightValue - 100, 60, 60);

        p.noStroke();
        for (let N = 0; N <= guessNum; N++) {
            for (let n = 0; n <= 4; n++) {
                if (N === guessNum) {
                    if (guesses[N][n] === 1) {
                        p.fill(130, 70, 0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 2) {
                        p.fill(255, 0, 0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 3) {
                        p.fill(255, 128, 0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 4) {
                        p.fill(255, 255, 0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 5) {
                        p.fill(0, 255, 0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 6) {
                        p.fill(0, 255, 255);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 7) {
                        p.fill(0, 0, 255);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 8) {
                        p.fill(255, 0, 255);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else if (guesses[N][n] === 9) {
                        p.fill(0);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    } else {
                        p.fill(255);
                        p.ellipse(n * 75 + 50, heightValue - 100, 50, 50);
                    }
                } else {
                    if (guesses[N][n] === 1) {
                        p.fill(130, 70, 0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 2) {
                        p.fill(255, 0, 0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 3) {
                        p.fill(255, 128, 0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 4) {
                        p.fill(255, 255, 0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 5) {
                        p.fill(0, 255, 0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 6) {
                        p.fill(0, 255, 255);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 7) {
                        p.fill(0, 0, 255);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 8) {
                        p.fill(255, 0, 255);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else if (guesses[N][n] === 9) {
                        p.fill(0);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    } else {
                        p.fill(255);
                        p.ellipse(n * 55 + 115, 30 + 60 * N, 40, 40);
                    }
                }
            }
        }

        //Text
        p.textSize(40);
        for (var t = 0; t <= guessNum; t++) {
            if (t !== guessNum) {
                p.fill(0);
                p.text(rightPos[t], 380, 45 + 60 * t);
                p.fill(255);
                p.text(rightCol[t], 415, 45 + 60 * t);
                p.fill(0);
                p.text(t + 1, 15, 45 + 60 * t);
            }
        }
        if (winToggle) {
            p.fill(125, 65, 0);
            p.rect(30, p.height - 140, 390, 120, 30);
            p.fill(100, 50, 0);
            p.rect(45, p.height - 70, 360, 40, 20);
            p.fill(0);
            p.textSize(25);
            p.text(
                "Congratulations!! You won in " +
                guessNum +
                "\nturns!!      Average: " +
                averageScore(p),
                50,
                p.height - 110
            );
            p.fill(0, 255, 0);
            p.textSize(25);
            p.text("Play Again", 163, p.height - 40);
        } else if (restartConfirm) {
            p.fill(125, 65, 0);
            p.rect(30, p.height - 140, 390, 120, 30);
            p.fill(100, 50, 0);
            p.rect(45, p.height - 70, 175, 40, 20);
            p.rect(230, p.height - 70, 175, 40, 20);
            p.fill(0);
            p.textSize(25);
            p.text(
                "Are you sure you would like to\n                  restart?",
                60,
                p.height - 110
            );
            if (p.height === 150) {
                p.fill(0, 255, 0);
                p.textSize(12);
                p.text(
                    "What!! Why is this button even\n     here? Nothing happened!",
                    50,
                    100
                );
                p.fill(255, 100, 100);
                p.text(
                    "Yes, I need to restart before\n          anything happens.",
                    240,
                    100
                );
            } else {
                p.fill(0, 255, 0);
                p.textSize(25);
                p.text("No", 115, p.height - 40);
                p.fill(255, 100, 100);
                p.text("Yes", 295, p.height - 40);
            }
        }
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default MastermindGame;