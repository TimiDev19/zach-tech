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
        <>
            <div
                id="whyus"
                className=" w-[100vw] min-h-[100vh] bg-white lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-[50px] pt-[90px]"
            >
                <div className=" w-[100%] lg:w-[45%] h-full flex items-center justify-center mb-[20px]">
                    <FadeInFromBottom>
                        <Image src={transparentLogo} alt="zach tech logo" />
                    </FadeInFromBottom>
                </div>

                <div className=" w-[100%] lg:w-[45%] h-full flex flex-col items-center justify-start text-[#000033]">
                    <div className=" mb-[30px] w-full min-h-[40vh] bg-transparent block text-justify ">
                        <h1 className=" text-4xl font-extrabold mb-[10px]">Why Trust Us?</h1>
                        <p className=" text-justify">
                            <strong>Where Innovation Meets Execution. Where Vision Becomes Reality</strong> <br />
                            At ZachTech Industries, we're not just another tech company making bold claims, we're a team of passionate technologists, designers, and strategists who've made it our mission to redefine what's possible for businesses in Nigeria and beyond.
                        </p>
                        <p className=" mt-[10px] text-justify">
                            Since our founding, we've had the privilege of partnering with startups finding their footing, SMEs scaling rapidly, and established enterprises pushing boundaries. What sets us apart isn't just our technical expertise, it's our relentless commitment to your success and our ability to transform complex technology into tangible business results.
                        </p>
                        <p className=" mt-[10px] text-justify">
                            <strong>Here's the truth:</strong> Technology alone doesn't build businesses. Strategy does. Execution does. Partnership does. And that's exactly what you get with Zach Technologies Industries, a dedicated partner who treats your success as our own, brings both creative vision and technical mastery to every project, and never settles for "good enough" when exceptional is possible.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-full lg:w-[50%] mx-auto mt-[10px] min-h-[20vh] bg-transparent flex flex-col lg:flex-row items-center justify-between">
                <div className=" bg-transparent mb-[10px] flex flex-col items-center justify-center rounded-lg text-[#000033] font-extrabold text-3xl lg:text-6xl">
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

                <div className=" bg-transparent mb-[10px] flex flex-col items-center justify-center rounded-lg text-[#000033] font-extrabold text-3xl lg:text-6xl">
                    <div>
                        <CountUp
                            from={0}
                            to={5}
                            separator=","
                            direction="up"
                            duration={1}
                            onStart={() => { }}
                            onEnd={() => { }}
                            className="count-up-text text-[#000033] font-extrabold text-6xl"
                        />
                    </div>
                    <h1 className="text-lg lg:text-xl">Clients</h1>
                </div>

                <div className=" bg-transparent mb-[10px] flex flex-col items-center justify-center rounded-lg text-[#000033] font-extrabold text-3xl lg:text-6xl">
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
        </>
    )
}

export default WhyUs