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

const WhyUs = () => {
    return (
        <div
            id="whyus"
            className="relative pb-[200px] max-sm:h-[100vh] lg:flex lg:flex-row z-10 overflow-y-visible flex items-center lg:items-start justify-center px-[2.5%]"
        >
            <div className=" w-[45%] h-full">
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
            </div>
        </div>
    )
}

export default WhyUs