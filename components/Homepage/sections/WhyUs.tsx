"use client";
// import { ContainerScroll } from "@/components/ui/ContainerScrollAnimation";
import Image from "next/image";
import CountUp from "@/components/CountUp"
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
import { FadeInFromBottom } from "@/components/FadeInFromBottom";

const WhyUs = () => {
    return (
        <div
            id="whyus"
            className=" w-[100vw] min-h-[100vh] lg:h-[100vh] mb-[50px] flex flex-col lg:flex-row items-center justify-between p-[50px] pt-[90px]"
        >
            <div className=" w-[100%] lg:w-[45%] h-full flex items-center justify-center mb-[50px]">
                <FadeInFromBottom>
                    <Image src={transparentLogo} alt="zach tech logo" />
                </FadeInFromBottom>
            </div>

            <div className=" w-[100%] lg:w-[45%] h-full flex flex-col items-center justify-start text-[#000033]">
                <div className=" mb-[30px] w-full h-[40%] bg-transparent flex flex-col items-center justify-center">
                    <h1 className=" text-4xl font-extrabold mb-[10px]">Why Trust Us?</h1>
                    <p>
                        Zachtech industries is a tech startup, redefining how businesses and individuals
                        harness the power of technology to achieve meaningful
                        progress. As a forward-thinking technology firm, we specialize
                        in delivering innovative, scalable solutions that empower
                        startups, SMES, and large enterprises to thrive in today's
                        digital world.
                    </p>
                </div>

                <div className=" w-full h-[40%] bg-transparent flex flex-col lg:flex-row items-center justify-between">
                    <div className=" bg-transparent mb-[20px] flex flex-col items-center justify-center rounded-lg text-[#000033] font-extrabold text-3xl lg:text-6xl">
                        <div>
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                onStart={() => { }}
                                onEnd={() => { }}
                                className="count-up-text text-[#000033] font-extrabold text-6xl"
                            />%
                        </div>
                        <h1 className="text-lg lg:text-xl">Customer Satisfaction</h1>
                    </div>

                    <div className=" bg-transparent mb-[20px] flex flex-col items-center justify-center rounded-lg text-[#000033] font-extrabold text-3xl lg:text-6xl">
                        <div>
                            <CountUp
                                from={0}
                                to={6}
                                separator=","
                                direction="up"
                                duration={1}
                                onStart={() => { }}
                                onEnd={() => { }}
                                className="count-up-text text-[#000033] font-extrabold text-6xl"
                            />+
                        </div>
                        <h1 className=" text-xl">Projects</h1>
                    </div>
                </div>
            </div>
            {/* <div className=" w-[45%] h-full">
                <Image
                    src={laptop}
                    alt=""
                    className=" hidden lg:flex w-full -translate-x-2/5 absolute"
                />
            </div>

            <div className=" z-[10] relative h-full lg:h-[100vh] lg:w-[50%] flex flex-col items-center justify-center bg-transparent">
                <div className=" h-[auto]">
                    <h1
                        className={` text-center text-[#000033] text-[45px] mb-4`}
                    >
                        Why Us?
                    </h1>
                    <p
                        className={` text-[#000033] text-[20px] w-[95%] lg:w-[75%] mx-auto text-justify mb-[30px]`}
                    >
                        Welcome to ZachTech Industries, where we convert your business
                        ideas into reality, using modern technology tools and
                        techniques. We don't just build technology we build
                        possibilities.
                    </p>
                    <p
                        className={`text-justify text-[#000033] text-[20px] w-[95%] lg:w-[75%] mx-auto`}
                    >
                        Zachtech industries is a tech startup, redefining how businesses and individuals
                        harness the power of technology to achieve meaningful
                        progress. As a forward-thinking technology firm, we specialize
                        in delivering innovative, scalable solutions that empower
                        startups, SMES, and large enterprises to thrive in today's
                        digital world.
                    </p>
                </div>
            </div> */}
        </div>
    )
}

export default WhyUs