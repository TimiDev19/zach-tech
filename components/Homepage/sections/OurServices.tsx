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

const OurServices = () => {
    return (
        <div
            id="service"
            className=" bg-white pt-0 h-auto  w-full text-xl mb-[30px]"
        >
            <h1
                className={`text-center text-[#000033] text-[45px]`}
            >
                Our <span className=" text-[#EEAD0E]">Services</span>
            </h1>
            <div className=" h-auto max-sm:h-auto w-full bg-transparent flex items-center justify-between px-[2.5%] max-sm:flex-col">
                <div className=" w-[30%] max-sm:w-full h-full flex flex-col items-center justify-between">
                    <div className=" w-full flex items-center justify-between mb-4">
                        <div
                            className={` w-[calc(100%-60px)] text-black`}
                        >
                            <h1>UI/UX Design</h1>
                            <p className=" text-[16px]">
                                Wireframing, UI design (mobile and website), UX design
                                (mobile and website),
                                Rebranding, Graphic design ,Motion pictures
                            </p>
                        </div>

                        <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                            <Image src={service} alt="" />
                        </div>
                    </div>
                    {/* <div className=" w-full flex items-center justify-between mb-4">
                <div
                  className={`${goldman.className} w-[calc(100%-60px)] text-black`}
                >
                  <h1>Font End</h1>
                  <p className=" text-[16px]">
                    REACT JS, HTML5, CSS, TAILWIND, CRUD, WEB HOSTING etc
                  </p>
                </div>
                <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                  <Image src={service2} alt="" />
                </div>
              </div> */}
                    <div className=" w-full flex items-center justify-between mb-4">
                        <div
                            className={`w-[calc(100%-60px)] text-black`}
                        >
                            <h1>Graphics Designs</h1>
                            <p className=" text-[16px]">
                                Figma, Coral draw, Photoshop Rebranding, Graphic design,
                                Polotno studio, Motion pictures
                            </p>
                        </div>
                        <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                            <Image src={service3} alt="" />
                        </div>
                    </div>
                </div>

                <div className=" w-[30%] max-sm:w-50% max-sm:mt-5  max-sm:mb-5 h-full flex items-center justify-center ">
                    <Image src={transparentLogo} alt="zach tech logo" />
                </div>

                <div className=" w-[30%] max-sm:w-full h-full flex flex-col items-center justify-center">
                    <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                        <div
                            className={` w-[calc(100%-60px)] text-black`}
                        >
                            <h1>Back End</h1>
                            <p className=" text-[16px]">
                                Server maintenance,web hosting,server migration and much more.
                            </p>
                        </div>
                        <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                            <Image src={service2} alt="" />
                        </div>
                    </div>
                    <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                        <div
                            className={` w-[calc(100%-60px)] text-black`}
                        >
                            <h1>Mobile Development</h1>
                            <p className=" text-[16px]">
                                maintenance,optimization, development and many more world class services
                            </p>
                        </div>
                        <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                            <Image src={service4} alt="" />
                        </div>
                    </div>

                    <div className=" w-full flex flex-row-reverse items-center justify-between mb-4">
                        <div
                            className={`w-[calc(100%-60px)] text-black`}
                        >
                            <h1>Web Development</h1>
                            <p className=" text-[16px] ">
                                Blog website, serach engine optimization (SEO), corpoare website, Real estate website, SME website, eCommerce website, dating website, website upgrading and scaling, host migration.
                            </p>
                        </div>
                        <div className=" h-[50px] w-[50px] p-2 rounded-full bg-[#EEAD0E] flex items-center justify-center">
                            <Image src={service5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices