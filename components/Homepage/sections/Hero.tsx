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
        <div
            id="home"
            className="z-[3] h-auto w-[100vw] relative flex flex-col items-center justify-end"
        >
            <div className="relative w-full h-full">
                {/* Top Section (overlapping) */}
                <div
                    id="home"
                    className={`relative z-10 overflow-y-visible  min-h-[100vh] h-[150vh] w-[100vw] flex items-center justify-start  px-[2.5%] ${slides[index].bg}`}
                >
                    {/* <div className=" lg:w-[40%]">
            <h1
              className={`${goldman.className} text-white text-[45px] capitalize mb-4`}
            >
              Build your <span className="text-[#EEAD0E]">dream</span> website
              today
            </h1>
            <h1
              className={`${goldman.className} text-[40px] text-white lg:text-[#000033]`}
            >
              Technologies beyond possibility
            </h1>
          </div> */}
                    {slides[index].content}
                </div>

                {/* Bottom Section (pushed up behind the top) */}
                
            </div>
        </div>
    )
}

export default Hero