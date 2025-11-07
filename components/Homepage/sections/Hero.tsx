"use client";
// import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import Image from "next/image";
import React from "react";
import transparentLogo from "@/assets/zach-transparent-logo.png";
import service from "@/assets/UI.png";
import service2 from "@/assets/hugeicons_developer.png";
import service3 from "@/assets/streamline-freehand-color_graphic-tablet-draw-1.png";
import service4 from "@/assets/material-symbols_developer-mode.png";
import service5 from "@/assets/material-symbols_developer-mode-tv.png";
import { Goldman } from "next/font/google";
import { Island_Moments } from "next/font/google";
import laptop from "@/assets/Frame 26.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import Typewriter from "@/components/Typewriter";
import { FadeInFromBottom } from "@/components/FadeInFromBottom";

interface Slide {
    bg: string;
    content: ReactNode;
}

const slides: Slide[] = [
    {
        bg: "relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
                <h1
                    className={` text-white text-[45px] capitalize mb-4`}
                >
                    Build your <span className="text-[#EEAD0E]">dream</span> website
                    today
                </h1>
                <h1
                    className={`text-[40px] text-white lg:text-[#EEAD0E]`}
                >
                    Technologies beyond possibility
                </h1>
            </div>
        ),
    },
    {
        bg: "relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background2 px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
                <h1
                    className={` text-white text-[45px] capitalize mb-4`}
                >
                    Build your <span className="text-[#EEAD0E]">dream</span> website
                    today
                </h1>
                <h1
                    className={`text-[40px] text-white lg:text-[#EEAD0E]`}
                >
                    Technologies beyond possibility
                </h1>
            </div>
        ),
    },
    {
        bg: "relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background3 px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
                <h1
                    className={` text-white text-[45px] capitalize mb-4`}
                >
                    Build your <span className="text-[#EEAD0E]">dream</span> website
                    today
                </h1>
                <h1
                    className={` text-[40px] text-white lg:text-[#EEAD0E]`}
                >
                    Technologies beyond possibility
                </h1>
            </div>
        ),
    },
    {
        bg: "relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start background4 px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
                <h1
                    className={` text-white text-[45px] capitalize mb-4`}
                >
                    Build your <span className="text-[#EEAD0E]">dream</span> website
                    today
                </h1>
                <h1
                    className={` text-[40px] text-white lg:text-[#EEAD0E]`}
                >
                    Technologies beyond possibility
                </h1>
            </div>
        ),
    },
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000); // change every 4s
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="h-screen relative bg-black">
            <video
                src="/bg-vid.mp4"
                className="absolute inset-0 object-cover w-full h-full opacity-50"
                autoPlay
                loop
                playsInline
                muted
                controls={false}
            ></video>
            <div
                className=" w-full pt-[80px] h-[100vh] relative flex items-center justify-center text-white"
            >
                <FadeInFromBottom>
                    <div className=" h-full flex flex-col items-center justify-center w-[95%] mx-auto text-center">
                        <h1 className=" font-extrabold text-2xl lg:text-5xl text-center mb-[30px]">
                            Welcome To <br />
                            <span className=" text-[#EEAD0E] text-2xl lg:text-7xl uppercase"> Zach Technologies Industries</span> <br />
                            <span className=" text-xl lg:text-3xl italic font-thin">Technologies beyond possibilities</span>
                        </h1>
                        <Typewriter
                            texts={[
                                "Build your dream website.",
                                "Learn an industry level tech skill.",
                                "Build your dream mobile app.",
                                "Transform your business with cutting-edge technology",
                                "Get your aesthetic graphics.",
                                "Get free professional consultation",
                            ]}
                            typingSpeed={100}
                            deletingSpeed={50}
                            pauseTime={2000}
                        />
                    </div>
                </FadeInFromBottom>
            </div>
        </section>
    )
}

export default Hero