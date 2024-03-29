"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "../util/mouse";

interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    maxSpeed?: number;
    maxSize?: number;
    minSize?: number;
    neighbourhoodSize?: number;
    tooClose?: number;
    mouseInfluence?: number;
    refresh?: boolean;
}

export default function Particles({
    className = "",
    quantity = 30,
    maxSpeed = 5,
    maxSize = 10,
    minSize = 5,
    neighbourhoodSize = 100,
    tooClose = 20,
    mouseInfluence = 20,
    refresh = false,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<any[]>([]);
    const mousePosition = useMousePosition();
    const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const mouseOn = useRef<boolean>(false);
    const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        firstAnimate();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    useEffect(() => {
        onMouseMove();
    }, [mousePosition.x, mousePosition.y]);

    useEffect(() => {
        initCanvas();
    }, [refresh]);

    const initCanvas = () => {
        circles.current.length = 0;
        resizeCanvas();
        drawParticles();
    };

    const onMouseMove = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;
            const x = mousePosition.x - rect.left;
            const y = mousePosition.y - rect.top;
            const inside = x < w && x > 0 && y < h && y > 0;
            if (inside) {
                mouseOn.current = true;
                mouse.current.x = x;
                mouse.current.y = y;
            } else {
                mouseOn.current = false;
            }
        } else {
            mouseOn.current = false;
        }
    };

    type Circle = {
        x: number;
        y: number;
        size: number;
        dx: number;
        dy: number;
    };

    const resizeCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;
            context.current.scale(dpr, dpr);
        }
    };

    const circleParams = (): Circle => {
        const x = Math.floor(Math.random() * canvasSize.current.w);
        const y = Math.floor(Math.random() * canvasSize.current.h);
        const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
        const dx = (Math.random() - 0.5);
        const dy = (Math.random() - 0.5);
        return {
            x,
            y,
            size,
            dx,
            dy,
        };
    };

    const drawCircle = (circle: Circle, update = false) => {
        if (context.current) {
            const { x, y, size, dx, dy } = circle;
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);

            // const x1 = x / canvasSize.current.w;
            // const y1 = y / canvasSize.current.h;

            // const x1 = dx / (maxSpeed + maxSpeed) + 0.5;
            // const y1 = dy / (maxSpeed + maxSpeed) + 0.5;

            // const r = x1 * 255;
            // const g = ((1 - x1) * y1) * 255;
            // const b = (1 - y1) * 255;
            // context.current.fillStyle = `rgb(${r}, ${g}, ${b})`;

            const athird = 2 * Math.PI / 3;

            const angle = Math.atan2(dy, dx);
            const r = 255 * Math.abs(Math.cos(angle));
            const g = 255 * Math.abs(Math.cos(angle + athird));
            const b = 255 * Math.abs(Math.cos(angle - athird));

            context.current.fillStyle = `rgb(${r < 0 ? 0 : r}, ${g < 0 ? 0 : g}, ${b < 0 ? 0 : b})`;

            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (!update) {
                circles.current.push(circle);
            }
        }
    };

    const clearContext = () => {
        if (context.current) {
            context.current.clearRect(
                0,
                0,
                canvasSize.current.w,
                canvasSize.current.h,
            );
        }
    };

    const drawParticles = () => {
        clearContext();
        const particleCount = quantity;
        for (let i = 0; i < particleCount; i++) {
            const circle = circleParams();
            drawCircle(circle);
        }
    };

    class Vector {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    const firstAnimate = async () => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        animate();
    }

    const animate = () => {
        clearContext();

        var v1: Vector, v2: Vector, v3: Vector;
        circles.current.forEach((circle: Circle, i: number) => {
            const circleXBefore = circle.x;
            const circleYBefore = circle.y;

            // Create a list of the circles within the neighbourhood
            let neighbouringBoids: any[] = [];
            circles.current.forEach((otherCircle: Circle, j: number) => {
                if (i !== j && Math.abs(circle.x - otherCircle.x) < neighbourhoodSize) {
                    neighbouringBoids.push(otherCircle);
                }
            });

            if (neighbouringBoids.length != 0) {
                if (Math.hypot(circle.x - mouse.current.x, circle.y - mouse.current.y) < mouseInfluence) {
                    // TODO: Decide on attract or repel
                    circle.dx += (circle.x - mouse.current.x) / 100;
                    circle.dy += (circle.y - mouse.current.y) / 100;
                } else {
                    v1 = rule1(circle, neighbouringBoids);
                    v2 = rule2(circle, neighbouringBoids);
                    v3 = rule3(circle, neighbouringBoids);

                    // Update the circle's velocity
                    circle.dx += (v1.x + v2.x + v3.x) / 200;
                    circle.dy += (v1.y + v2.y + v3.y) / 200;
                }

                // Limit the circle's velocity
                const currentSpeed = Math.hypot(circle.dx, circle.dy);
                if (currentSpeed > 0 && currentSpeed > maxSpeed) {
                    circle.dx = (circle.dx / currentSpeed) * maxSpeed;
                    circle.dy = (circle.dy / currentSpeed) * maxSpeed;
                }
            }

            // Update the circle's position
            circle.x += circle.dx;
            circle.y += circle.dy;

            // Loop the circle around the canvas
            if (circle.x < 0) circle.x += canvasSize.current.w;
            if (circle.x > canvasSize.current.w) circle.x -= canvasSize.current.w;
            if (circle.y < 0) circle.y += canvasSize.current.h;
            if (circle.y > canvasSize.current.h) circle.y -= canvasSize.current.h;

            drawCircle(
                {
                    ...circle,
                    x: circle.x,
                    y: circle.y,
                },
                true,
            );
        });
        window.requestAnimationFrame(animate);
    };

    function rule1(circle: Circle, neighbouringCircles: Circle[]) {
        // Rule 1: Boids try to fly towards the center of mass of neighbouring boids.
        var v1: Vector = new Vector(0, 0);
        neighbouringCircles.forEach((otherCircle: Circle, j: number) => {
            v1.x += otherCircle.x;
            v1.y += otherCircle.y;
        });

        // v1.x += mouse.current.x * mouseInfluence;
        // v1.y += mouse.current.y * mouseInfluence;

        v1.x /= (neighbouringCircles.length);
        v1.y /= (neighbouringCircles.length);

        v1.x -= circle.x;
        v1.y -= circle.y;

        v1.x /= 100;
        v1.y /= 100;

        return v1;
    }

    function rule2(circle: Circle, neighbouringCircles: Circle[]) {
        // Rule 2: Boids try to keep a small distance away from other objects (including other boids).
        var v2: Vector = new Vector(0, 0);
        neighbouringCircles.forEach((otherCircle: Circle, j: number) => {
            if (Math.hypot(otherCircle.x - circle.x, otherCircle.y - circle.y) < tooClose) {
                v2.x -= otherCircle.x - circle.x;
                v2.y -= otherCircle.y - circle.y;
            }
        });

        return v2;
    }

    function rule3(circle: Circle, neighbouringCircles: Circle[]) {
        // Rule 3: Boids try to match velocity with near boids.
        var v3: Vector = new Vector(0, 0);
        neighbouringCircles.forEach((otherCircle: Circle, j: number) => {
            v3.x += otherCircle.dx;
            v3.y += otherCircle.dy;
        });
        v3.x /= neighbouringCircles.length;
        v3.y /= neighbouringCircles.length;
        v3.x -= circle.dx;
        v3.y -= circle.dy;
        v3.x /= 2;
        v3.y /= 2;

        return v3;
    }

    return (
        <div className={className} ref={canvasContainerRef} aria-hidden="true">
            <canvas ref={canvasRef} />
        </div>
    );
}

/*
const remapValue = (
        value: number,
        start1: number,
        end1: number,
        start2: number,
        end2: number,
    ): number => {
        const remapped =
            ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };
 */


/*// Handle the alpha value
            const edge = [
                circle.x + circle.translateX - circle.size, // distance from left edge
                canvasSize.current.w - circle.x - circle.translateX - circle.size, // distance from right edge
                circle.y + circle.translateY - circle.size, // distance from top edge
                canvasSize.current.h - circle.y - circle.translateY - circle.size, // distance from bottom edge
            ];
            const closestEdge = edge.reduce((a, b) => Math.min(a, b));
            const remapClosestEdge = parseFloat(
                remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
            );
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            } else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                ease;
            // circle gets out of the canvas
            if (
                circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size
            ) {
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                const newCircle = circleParams();
                drawCircle(newCircle);
                // update the circle position
            } else {
                drawCircle(
                    {
                        ...circle,
                        x: circle.x,
                        y: circle.y,
                        translateX: circle.translateX,
                        translateY: circle.translateY,
                        alpha: circle.alpha,
                    },
                    true,
                );
            }*/