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
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] mobile-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Mobile Development</h1>
                            <p className=' mb-[20px]'>
                                Learn how to design, build, and launch Android and iOS apps using Flutter, taking you from idea to app store.
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                You will learn how to design, build, and launch stunning apps for Android and iOS using tools like Flutter. Whether you're a beginner or ready to go pro, we’ll guide you from idea to app store.
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1. Build beautiful, fast and native-quality apps with Flutter <br />
                                2. Become a fully-fledged Flutter developer <br />
                                3. Build iOS and Android apps with just one codebase <br />
                                4. Build iOS and Android apps using just one programming language (Dart) <br />
                                5. Build a portfolio of beautiful Flutter apps to impress any recruiter <br />
                                6. Understand all the fundamental concepts of Flutter development <br />
                                7. Become proficient in one of the fastest growing technologies. <br />
                                8. Certificate upon completed. <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. A Computer that has admin privileges <br />
                                2. Have 10GB of free space on your hard drive. <br />
                                3. All software we'll be using is free to download and install. <br />
                                4. Although you can build iOS apps on a Windows computer with Flutter, if you want to test it, you will need a Mac. <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                1. If you have never programmed before, then take this course to learn Dart and build iOS and Android apps. <br />
                                2. If you know how to code, but are new to mobile development, then take this course to build apps with just one codebase. <br />
                                3. If you are a native app developer, then take this course to see how much time you can save building native-quality iOS and Android apps with Flutter. <br />
                                4. If you've tried Flutter before, then take this course to get a comprehensive curriculum that covers all the important aspects of Flutter development <br />
                            </p>

                            <Link
                                href={"https://forms.gle/CMR6sx7BkRW6zQCv5"}
                                target='_blank'
                                className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                Register Now
                            </Link>
                        </div>
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
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] fs-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Full-Stack Development</h1>
                            <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                You will learn how to build complete web applications from stunning frontends to powerful backends. Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB while working on real-world projects that prepare you for the tech industry.
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1.Master frontend development with React. <br />
                                2. Master backend development with Node. <br />
                                3. Work as a freelance web developer. <br />
                                4. After the course you will be able to build ANY website you want. <br />
                                5. Build fully-fledged websites and web apps for your startup or business. <br />
                                6. Learn the latest technologies, including Javascript, React, Node and even Web3 development. <br />
                                7. Build 16 web development projects for your portfolio, ready to apply for junior developer jobs. <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. No programming experience needed - I'll teach you everything you need to know. <br />
                                2. A computer with access to the internet. <br />
                                3. No paid software required. <br />
                                4. We will walk you through, step-by-step how to get all the software installed and set up. <br />
                            </p>

                            <Link
                                href={"https://forms.gle/CMR6sx7BkRW6zQCv5"}
                                target='_blank'
                                className=" text-[16px] w-[40%] text-center py-[10px] bg-[#000033] block rounded-xl text-white hover:bg-opacity-80 duration-300"
                            >
                                Register Now
                            </Link>
                        </div>
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