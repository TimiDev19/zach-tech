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

const Training = () => {
    return (
        <div
            id="training"
            className=" min-h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#000033] to-[#EEAD0E] pt-[100px]"
        >
            <div
                className=" pt-0 h-full w-full text-xl mb-[30px]"
            >
                <h1
                    className={`text-center text-[#EEAD0E] text-[45px] mb-[30px]`}
                >
                    Trainings <span className=" text-[#EEAD0E]">We Offer</span>
                </h1>
                <div className=' min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-3 px-[2%]'>
                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px]  bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] data-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Data Analysis</h1>
                            <p>
                                Join our Data Analysis Training and learn how to turn raw data into real insights using tools like Excel, Power BI, SQL, and Python. Whether you’re a beginner or looking to upskill, our hands-on sessions will help you analyze, visualize, and present data like a pro.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] mobile-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Mobile Dev</h1>
                            <p>
                                Join our Mobile App Development Training and learn how to design, build, and launch stunning apps for Android and iOS using tools like Flutter, React Native, and Next.js. Whether you're a beginner or ready to go pro, we’ll guide you from idea to app store.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] webDev-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Frontend Development</h1>
                            <p>
                                Join our Frontend Development Training and master the skills to build beautiful, responsive, and interactive websites using HTML, CSS, JavaScript, React, and Next.js.
                                From beginner to job-ready — we’ll help you code with confidence and create projects that stand out.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] backend-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Backend Development</h1>
                            <p>
                                Join our Backend Development Training and learn how to build fast, secure, and scalable server-side applications using Node.js, Express, Python, and databases like MongoDB & MySQL.
                                Gain the skills to design APIs, manage data, and bring logic to life behind every great app.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] backend-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Full Stack Development</h1>
                            <p>
                                Join our Full Stack Development Training and learn to build complete web applications — from stunning frontends to powerful backends.
                                Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while working on real-world projects that prepare you for the tech industry.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] graphics-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Graphics Design</h1>
                            <p>
                                Join our Graphics Design Training and learn how to create stunning visuals that captivate and communicate.
                                From Adobe Photoshop, Illustrator, and Canva to design principles and branding — we’ll teach you everything you need to become a professional designer.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] uiux-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Ui/Ux Design</h1>
                            <p>
                                Join our UI/UX Design Training and learn how to craft intuitive, beautiful, and user-centered digital products.
                                Master tools like Figma, Adobe XD, and FigJam, and gain hands-on experience in wireframing, prototyping, and user research.
                            </p>
                        </div>
                    </div>

                    <div className=' mb-[20px] w-[95%] block h-[70vh] max-sm:mb-[20px] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] motion-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Motion Graphics</h1>
                            <p>
                                Join our Motion Graphics Training and learn how to turn static visuals into stunning animations.
                                Master industry tools like After Effects, Premiere Pro, and Blender, and create eye-catching motion content for ads, social media, and film.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training