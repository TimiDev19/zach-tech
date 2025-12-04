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
            className=" min-h-[100vh] w-[100vw] flex items-center justify-center bg-white pt-[100px]"
        >
            <div
                className=" pt-0 h-full w-full text-xl mb-[30px]"
            >
                {/* <h1
                    className={`text-center text-[#EEAD0E] text-[38px] lg:text-[45px] mb-[30px]`}
                >
                    Trainings <span className=" text-[#EEAD0E]">We Offer</span>
                </h1> */}
                <div className=" text-white w-[95%] mx-auto min-h-[35vh] bg-[#000033] rounded-xl mb-[20px] p-[2.5%] flex flex-col items-center justify-center">
                    <h1 className=" text-[36px] lg:text-[48px] font-semibold mb-[20px] text-center">Unlock Your Full Potential</h1>
                    <p className=" text-[18px] font-light w-full lg:w-[55%] text-center mx-auto">We believe in continuous growth. Our training program are designed to empower you with the knowledge and skills to excel in your career and drive innovation.</p>
                </div>
                <div className=' min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-4 px-[2%]'>
                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full data-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Data Analysis</h1>
                            <p className=" text-sm mb-[10px]">
                                Join our Data Analysis Training to master Excel, Power BI, SQL, and Python through hands-on sessions that teach you to turn raw data into clear, actionable insights.
                            </p>
                            <Link
                                href={"/trainings/data"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff]  data-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Data Analysis</h1>
                            <p className=" text-sm">
                                Join our Data Analysis Training and learn how to turn raw data into real insights using tools like Excel, Power BI, SQL, and Python. Whether you’re a beginner or looking to upskill, our hands-on sessions will help you analyze, visualize, and present data like a pro.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full mobile-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Mobile Dev</h1>
                            <p className=" text-sm mb-[10px]">
                                Learn how to design, build, and launch Android and iOS apps using Flutter, React Native, and Next.js, taking you from idea to app store.
                            </p>
                            <Link
                                href={"/trainings/mobile"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] mobile-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Mobile Dev</h1>
                            <p className=" text-sm">
                                Join our Mobile App Development Training and learn how to design, build, and launch stunning apps for Android and iOS using tools like Flutter, React Native, and Next.js. Whether you're a beginner or ready to go pro, we’ll guide you from idea to app store.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full webDev-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Frontend Development</h1>
                            <p className=" text-sm mb-[10px]">
                                Master HTML, CSS, JavaScript, React, and Next.js so you can build responsive, interactive websites and become job-ready with confidence.
                            </p>
                            <Link
                                href={"/trainings/frontend"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] webDev-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Frontend Development</h1>
                            <p className=" text-sm">
                                Join our Frontend Development Training and master the skills to build beautiful, responsive, and interactive websites using HTML, CSS, JavaScript, React, and Next.js.
                                From beginner to job-ready — we’ll help you code with confidence and create projects that stand out.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full backend-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Backend Development</h1>
                            <p className=" text-sm mb-[10px]">
                                Learn to build fast, secure, and scalable server-side apps using Node.js, Express, Python, and databases like MongoDB and MySQL while mastering API design and data management.
                            </p>
                            <Link
                                href={"/trainings/backend"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] backend-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Backend Development</h1>
                            <p className=" text-sm">
                                Join our Backend Development Training and learn how to build fast, secure, and scalable server-side applications using Node.js, Express, Python, and databases like MongoDB & MySQL.
                                Gain the skills to design APIs, manage data, and bring logic to life behind every great app.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full fs-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Full Stack Development</h1>
                            <p className=" text-sm mb-[10px]">
                                Learn how to build complete web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through real-world, industry-ready projects.
                            </p>
                            <Link
                                href={"/trainings/fullstack"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] fs-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Full Stack Development</h1>
                            <p className=" text-sm">
                                Join our Full Stack Development Training and learn to build complete web applications — from stunning frontends to powerful backends.
                                Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while working on real-world projects that prepare you for the tech industry.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full graphics-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Graphics Design</h1>
                            <p className=" text-sm mb-[10px]">
                                Master Photoshop, Illustrator, Canva, and core design principles so you can create stunning visuals and build professional-level design skills.
                            </p>
                            <Link
                                href={"/trainings/graphics"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] graphics-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Graphics Design</h1>
                            <p className=" text-sm">
                                Join our Graphics Design Training and learn how to create stunning visuals that captivate and communicate.
                                From Adobe Photoshop, Illustrator, and Canva to design principles and branding — we’ll teach you everything you need to become a professional designer.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full uiux-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Ui/Ux Design</h1>
                            <p className=" text-sm mb-[10px]">
                                Join our UI/UX Design Training to master Figma, Adobe XD, and FigJam while gaining hands-on experience in wireframing, prototyping, and user-centered design.
                            </p>
                            <Link
                                href={"/trainings/ui"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] uiux-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Ui/Ux Design</h1>
                            <p className=" text-sm">
                                Join our UI/UX Design Training and learn how to craft intuitive, beautiful, and user-centered digital products.
                                Master tools like Figma, Adobe XD, and FigJam, and gain hands-on experience in wireframing, prototyping, and user research.
                            </p>
                        </div>
                    </div> */}

                    <div className=" w-[95%] mb-[20px] min-h-[65vh] border border-slate-100 rounded-xl shadow-md shadow-slate-400">
                        <div className=" h-[50%] w-full motion-bg rounded-t-xl"></div>
                        <div className=" p-[4%] flex flex-col items-start justify-between h-[50%]">
                            <h1 className=' text-[18px] font-semibold mb-[10px]'>Motion Graphics</h1>
                            <p className=" text-sm mb-[10px]">
                            Join our Motion Graphics Training and learn how to turn static visuals into stunning animations.
                            </p>
                            <Link
                                href={"/trainings/motiongraphics"}
                                className=" text-[16px] w-full text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* <div className=' mb-[20px] w-[95%] min-h-[30vh] lg:h-[30vh] max-sm:mb-[20px] text-[#fff] motion-bg border-2 rounded-xl backdrop-blur-md  hover:bg-[#EEAD0E]/40 cursor-pointer transition-all duration-300 p-[20px] flex flex-col items-center justify-center hover:w-[100%]'>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Motion Graphics</h1>
                            <p className=" text-sm">
                                Join our Motion Graphics Training and learn how to turn static visuals into stunning animations.
                                Master industry tools like After Effects, Premiere Pro, and Blender, and create eye-catching motion content for ads, social media, and film.
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Training