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
import Services from "@/components/Services";

const OurServices = () => {
    const [open, setOpen] = useState(false)
    const [service, setService] = useState("")
    const web_id = "web"
    const ui_id = "ui"
    const graphics_id = "graphics"
    const mobile_id = "mobile"
    const backend_id = "backend"
    return (
        <div
            id="service"
            className=" min-h-[100vh] w-[100vw] flex items-center justify-center bg-white pt-[90x]"
        >
            <div
                className=" pt-0 h-full w-full text-xl mb-[30px]"
            >
                <div className=" w-full h-[30px]"></div>
                <h1
                    className={`text-center text-[#EEAD0E] text-[45px] mb-[30px]`}
                >
                    Our Services
                </h1>

                <div className=' min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-3 px-[2%]'>
                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] webDev-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Web Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Web Development</h1>
                            <p className=" text-sm">
                                "Your Website. Your Digital Empire. Your Success Story." <br />
                                Transform your business with stunning, high performance websites that convert visitors into customers. From corporate sites to e-commerce powerhouses. We make your online presence impossible to ignore.
                            </p>
                            <Link href={`/services/${web_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] uiux-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Ui/Ux Design</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Ui/Ux Design</h1>
                            <p className=" text-sm">
                                "Beautiful Designs That Make People Click, Buy & Come Back." <br />
                                Reach millions with powerful mobile apps for iOS and Android. We build cross-platform solutions that keep customers engaged and revenue flowing.
                            </p>
                            <Link href={`/services/${ui_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] graphics-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Graphics Design</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Graphics Design</h1>
                            <p className=" text-sm">
                                "Visuals That Stop Scrolls, Spark Emotions & Sell Ideas." <br />
                                From iconic logos to scroll-stopping social media graphics. We create designs that capture attention and convert browsers into believer
                            </p>
                            <Link href={`/services/${graphics_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] mobile-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Mobile Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[300px]">
                            <h1 className="text-xl font-extrabold">Mobile Development</h1>
                            <p className=" text-sm">
                                "Put Your Business in Every Customer's Pocket." <br />
                                Reach millions with powerful mobile apps for iOS and Android. We build cross-platform solutions that keep customers engaged and revenue flowing.

                            </p>
                            <Link href={`/services/${mobile_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] backend-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Backend Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Backend Development</h1>
                            <p className=" text-sm">
                                "The Invisible Power Behind Every Great Digital Experience." <br />
                                Scalable, secure backend systems that handle millions of users effortlessly. Fast APIs, robust databases, cloud-ready infrastructure.
                            </p>
                            <Link href={`/services/${backend_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] fs-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Full Stack Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Full Stack Development</h1>
                            <p className=" text-sm">
                                "Complete Solutions. From Idea to Launch. One Expert Team."
                                Why juggle multiple vendors when you can have one powerhouse team that handles everything?
                            </p>
                            <Link href={`/services/${backend_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className=" cursor-pointer group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-[#EEAD0E] hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[300px] data-bg rounded-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Data Analysis</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Data Analysis</h1>
                            <p className=" text-sm">
                            "Turn Your Data Into Your Competitive Advantage." <br />
Turn messy data into actionable insights. Make smarter decisions faster with custom dashboards and predictive analytics.
                            </p>
                            <Link href={`/services/${backend_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                open && <Services setOpen={setOpen} type={"teemi"}/>
            } */}
        </div>
    )
}

export default OurServices