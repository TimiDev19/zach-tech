"use client"
import React from 'react'
import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface Slide {
    bg: string;
    content: ReactNode;
}
const slides: Slide[] = [
    {
        bg: "relative z-0 overflow-y-visible w-[50vw] flex items-center justify-start apexium px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
               
            </div>
        ),
    },
    {
        bg: "relative z-0 overflow-y-visible w-[90vw] flex items-center justify-start eCommerce px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
                
            </div>
        ),
    },
    {
        bg: "relative z-0 overflow-y-visible w-[90vw] flex items-center justify-start skinny px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
               
            </div>
        ),
    },
    {
        bg: "relative z-0 overflow-y-visible w-[90vw] flex items-center justify-start sugma px-[2.5%]",
        content: (
            <div className=" lg:w-[40%]">
               
            </div>
        ),
    },
];
const ProjectVideo = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 4000); // change every 4s
        return () => clearInterval(timer);
    }, []);
    return (
        <div
            id="projects"
            className=" z-0 bg-white pt-0 w-full text-xl mt-[60px] mb-[10vh] lg:mb-[30vh]"
        >
            <h1
                className={`text-center text-[#000033] text-[45px]`}
            >
                Our <span className=" text-[#EEAD0E]">Projects</span>
            </h1>
            <div className="relative w-full h-full">
                <div
                    id=""
                    className={`relative z-0 overflow-y-visibl h-[30vh] lg:h-[100vh] w-[100vw] border border-[#EEAD0E] flex items-center justify-start  px-[2.5%] ${slides[index].bg}`}
                >
                    {slides[index].content}
                </div>
            </div>
        </div>
    )
}

export default ProjectVideo