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
            className=" min-h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-b from-[#000033] to-[#EEAD0E]"
        >
            <div
                className=" pt-0 h-full w-full text-xl mb-[30px]"
            >
                <h1
                    className={`text-center text-[#EEAD0E] text-[45px] mb-[30px]`}
                >
                    Our Services
                </h1>

                <div className=' min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-3 px-[2%]'>
                    <div className="group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[200px] webDev-bg rounded-t-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Web Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Web Development</h1>
                            <p className=" text-sm">
                                Blog website, serach engine optimization (SEO), corpoare website, Real estate website, SME website, eCommerce website, dating website, website upgrading and scaling, host migration.
                            </p>
                            <Link href={`/services/${web_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className="group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[200px] uiux-bg rounded-t-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Ui/Ux Design</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Ui/Ux Design</h1>
                            <p className=" text-sm">
                                Wireframing, UI design (mobile and website), UX design (mobile and website), Rebranding, Graphic design ,Motion pictures
                            </p>
                            <Link href={`/services/${ui_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className="group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[200px] graphics-bg rounded-t-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Graphics Design</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Graphics Design</h1>
                            <p className=" text-sm">
                                Figma, Corel draw, Photoshop Rebranding, Graphic design, Polotno studio, Motion pictures
                            </p>
                            <Link href={`/services/${graphics_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className="group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[200px] mobile-bg rounded-t-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Mobile Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[300px]">
                            <h1 className="text-xl font-extrabold">Mobile Development</h1>
                            <p className=" text-sm">
                                Figma, Corel draw, Photoshop Rebranding, Graphic design,
                                Polotno studio, Motion pictures
                            </p>
                            <Link href={`/services/${mobile_id}`} className=" text-sm underline text-[#000033] hover:text-white duration-500 transition-all">Read More</Link>
                        </div>
                    </div>

                    <div className="group h-fit mb-[20px] w-[95%] bg-[#EEAD0E]/20 border-2 rounded-xl border-[#EEAD0E]/30 backdrop-blur-md text-white hover:bg-[#EEAD0E]/30 transition-all duration-300 p-[20px] flex flex-col items-center justify-start overflow-hidden">

                        {/* Image area that shrinks on hover */}
                        <div className="w-full h-[200px] backend-bg rounded-t-xl mb-[30px] transition-all duration-500 group-hover:h-[120px]"></div>
                        <h1 className="text-xl font-extrabold group-hover:opacity-0 group-hover:translate-y-3 transition-all duration-500 opacity-100 translate-y-0">Backend Development</h1>
                        {/* Text area appears + pushes card taller */}
                        <div className="w-full opacity-0 max-h-0 overflow-hidden translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-[400px]">
                            <h1 className="text-xl font-extrabold">Backend Development</h1>
                            <p className=" text-sm">
                                Server maintenance,web hosting,server migration and much more.
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