"use client"
import CardStack from '@/components/CardStack';
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
            id='projects'
            className=' lg:min-h-[90vh] w-[100vw] pt-[85px] block px-[20px] bg-white'
        >
            <h1
                className={`text-center text-[#000033] text-[45px] block mb-[100px]`}
            >
                Our <span className=" text-[#EEAD0E]">Projects</span>
            </h1>

            {/* <div
                className="h-[50vh] lg:h-[70%] w-screen overflow-x-auto flex space-x-4 py-2 px-2 snap-x snap-mandatory"
            >
                <div className="text-white p-4 flex-shrink-0 h-full w-[80vw] lg:w-[400px] bg-[#000033]/80 backdrop-blur-md border-2 border-[#000033] rounded-xl flex flex-col items-start justify-start snap-center">
                    <div className="apexium w-full h-[45%] rounded-t-xl mb-5"></div>
                    <h1 className="text-2xl font-extrabold">Company Website</h1>
                    <p>
                        This is a fully functional and responsive website for the world's FIRST
                        web3 HR service, mixing aesthetics with efficiency.
                    </p>
                </div>

                <div className="text-white p-4 flex-shrink-0 h-full w-[80vw] lg:w-[400px] bg-[#000033]/80 backdrop-blur-md border-2 border-[#000033] rounded-xl flex flex-col items-start justify-start snap-center">
                    <div className="apexium w-full h-[45%] rounded-t-xl mb-5"></div>
                    <h1 className="text-2xl font-extrabold">Company Website</h1>
                    <p>
                        This is a fully functional and responsive website for the world's FIRST
                        web3 HR service, mixing aesthetics with efficiency.
                    </p>
                </div>

                <div className="text-white p-4 flex-shrink-0 h-full w-[80vw] lg:w-[400px] bg-[#000033]/80 backdrop-blur-md border-2 border-[#000033] rounded-xl flex flex-col items-start justify-start snap-center">
                    <div className="apexium w-full h-[45%] rounded-t-xl mb-5"></div>
                    <h1 className="text-2xl font-extrabold">Company Website</h1>
                    <p>
                        This is a fully functional and responsive website for the world's FIRST
                        web3 HR service, mixing aesthetics with efficiency.
                    </p>
                </div>
            </div> */}
            <div className=' w-[100vw] min-h-[100vh] items-center justify-center mb-[100px] block'>
                <CardStack />
            </div>
        </div>
    )
}

export default ProjectVideo