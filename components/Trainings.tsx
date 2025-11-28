import Link from 'next/link'
import React from 'react'

type TrainingsProps = {
    type: string;
};

const Trainings = ({ type }: TrainingsProps) => {
    return (
        <div className=' min-h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll text-[#000033] block text-justify'>
            {
                type === "data" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] data-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Data Analysis</h1>
                        <p className=' mb-[20px]'>Join our Data Analysis Training to master Excel, Power BI, SQL, and Python through hands-on sessions that teach you to turn raw data into clear, actionable insights.</p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>You will learn how to turn raw data into real insights using tools like Excel, Power BI, SQL, and Python. Whether you’re a beginner or looking to upskill, our hands-on sessions will help you analyze, visualize, and present data like a pro.</p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "ui" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] uiux-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Ui/Ux Design</h1>
                        <p className=' mb-[20px]'>Join our UI/UX Design Training to master Figma, Adobe XD, and FigJam while gaining hands-on experience in wireframing, prototyping, and user-centered design.</p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>You will learn how to craft intuitive, beautiful, and user-centered digital products.
                            Master tools like Figma, Adobe XD, and FigJam, and gain hands-on experience in wireframing, prototyping, and user research.</p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "graphics" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] graphics-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Graphics Design</h1>
                        <p className=' mb-[20px]'>Master Photoshop, Illustrator, Canva, and core design principles so you can create stunning visuals and build professional-level design skills.</p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to create stunning visuals that captivate and communicate.
                            From Adobe Photoshop, Illustrator, and Canva to design principles and branding, we’ll teach you everything you need to become a professional designer.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "mobile" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] mobile-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Mobile Development</h1>
                        <p className=' mb-[20px]'>
                            Learn how to design, build, and launch Android and iOS apps using Flutter, React Native, and Next.js, taking you from idea to app store.
                        </p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to design, build, and launch stunning apps for Android and iOS using tools like Flutter, React Native, and Next.js. Whether you're a beginner or ready to go pro, we’ll guide you from idea to app store.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "backend" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] backend-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Backend Development</h1>
                        <p className=' mb-[20px]'>
                            Learn to build fast, secure, and scalable server-side apps using Node.js, Express, Python, and databases like MongoDB and MySQL while mastering API design and data management.
                        </p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to build fast, secure, and scalable server-side applications using Node.js, Express, Python, and databases like MongoDB & MySQL.
                            Gain the skills to design APIs, manage data, and bring logic to life behind every great app.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "fullstack" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] fs-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Full Stack Development</h1>
                        <p className=' mb-[20px]'>
                            Learn how to build complete web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through real-world, industry-ready projects.
                        </p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to build complete web applications — from stunning frontends to powerful backends.
                            Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while working on real-world projects that prepare you for the tech industry.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

            {
                type === "frontend" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] webDev-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Frontend Development</h1>
                        <p className=' mb-[20px]'>
                            Master HTML, CSS, JavaScript, React, and Next.js so you can build responsive, interactive websites and become job-ready with confidence.
                        </p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to build beautiful, responsive, and interactive websites using HTML, CSS, JavaScript, React, and Next.js.
                            From beginner to job-ready — we’ll help you code with confidence and create projects that stand out.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

{
                type === "motiongraphics" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col lg:flex-row items-start lg:justify-between '>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] motion-bg rounded-2xl'></div>
                    <div className=' h-full lg:w-[45%] w-full lg:overflow-y-scroll'>
                        <h1 className=' text-[48px] font-semibold mb-[10px]'>Motion Graphics</h1>
                        <p className=' mb-[20px]'>
                        Join our Motion Graphics Training and learn how to turn static visuals into stunning animations.
                        </p>
                        <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                        <p className=' mb-[20px]'>
                            You will learn how to turn static visuals into stunning animations.
                                Master industry tools like After Effects, Premiere Pro, and Blender, and create eye-catching motion content for ads, social media, and film.
                        </p>
                        <Link
                            href={"/contact"}
                            className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                        >
                            Register Now
                        </Link>
                    </div>
                </div>
            }

        </div>
    )
}

export default Trainings