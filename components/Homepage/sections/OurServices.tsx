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
import { FadeInFromLeft } from "@/components/FadeInFromLeft";
import { FadeInFromBottom } from "@/components/FadeInFromBottom";
import { FadeInFromRight } from "@/components/FadeInFromRight";
import { div } from "framer-motion/client";

const OurServices = () => {
    return (
        <div
            id="service"
            className=" min-h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#000033] to-[#EEAD0E]"
        >
            <div
                className=" pt-0 h-full w-full text-xl mb-[30px]"
            >
                <h1
                    className={`text-center text-[#EEAD0E] text-[45px] mb-[30px]`}
                >
                    Our <span className=" text-[#EEAD0E]">Services</span>
                </h1>
                <div className=' min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-3 px-[2%]'>
                    <div className=' mb-[20px] w-[95%] block h-[60vh] max-sm:mb-[20px]  bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] webDev-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Web Development</h1>
                            <p>
                                Blog website, serach engine optimization (SEO), corpoare website, Real estate website, SME website, eCommerce website, dating website, website upgrading and scaling, host migration.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[60vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] uiux-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Ui/Ux Design</h1>
                            <p>
                                Wireframing, UI design (mobile and website), UX design (mobile and website), Rebranding, Graphic design ,Motion pictures
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[60vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] graphics-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Graphics Design</h1>
                            <p>
                                Figma, Corel draw, Photoshop Rebranding, Graphic design, Polotno studio, Motion pictures
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[60vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] mobile-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Mobile Development</h1>
                            <p>
                                Figma, Corel draw, Photoshop Rebranding, Graphic design, Polotno studio, Motion pictures
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[60vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] backend-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Backend Development</h1>
                            <p>
                                Server maintenance,web hosting,server migration and much more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices