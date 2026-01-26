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
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] data-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Data Analysis</h1>
                            {/* <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p> */}
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                Master Data Analysis: Python, Stats, Gen AI, EDA, AWS, SQL ,Excel, Power BI, Tableau,ETL,Snowflake & Feature Engineering.
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1. Learn how to efficiently manipulate, analyze, and visualize data using Python and its powerful libraries such as Pandas, NumPy, Matplotlib, and Seaborn. <br />
                                2. Develop the skills to retrieve, manipulate, and aggregate data using SQL. You'll work with SQL Server to manage complex databases and execute advanced queries. <br />
                                3. Discover how to perform EDA to uncover insights, identify patterns, and prepare data for further analysis through effective data visualization <br />
                                4. Learn to build interactive and insightful dashboards using Power BI, applying DAX for complex calculations, and integrating real-world data to produce reports. <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. A basic understanding of how to navigate your computer, including installing software and managing files, is essential. <br />
                                2. Some experience with spreadsheet software like Microsoft Excel or Google Sheets will be helpful, as it will give you a foundation for data manipulation and basic analysis concepts <br />
                                3. This course starts from the basics of Python, so no prior programming knowledge is necessary. However, a willingness to learn coding is important. <br />
                                4. An eagerness to explore data, solve problems, and develop new skills is key to getting the most out of this bootcamp. <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                1. Individuals looking to start a career in data analysis and gain a comprehensive skill set from the ground up. <br />
                                2. Professionals from other fields who want to transition into data analysis and need a structured, all-inclusive learning path. <br />
                                3. Those pursuing degrees in fields like computer science, statistics, business, or related areas who want to enhance their job prospects with practical, industry-relevant skills. <br />
                                4. Anyone with an interest in data, who wants to learn how to analyze, visualize, and make data-driven decisions, whether for professional development or personal projects. <br />
                                5. Individuals already in the data industry or related fields who wish to sharpen their skills, learn new tools like Python, SQL, and Power BI, and take on more advanced data analysis tasks <br />
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
                type === "ui" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] uiux-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Ui/Ux Desgin</h1>
                            {/* <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p> */}
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                This course will completely change the way you think about design whether you're just starting or looking to level up. Become a UI/UX Designer in 2026 with Real Projects, Components, Auto Layout, and AI Tools
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1. Design Real-World User Interfaces Using Figma <br />
                                2. Apply AI Tools to Speed Up and Improve the UI/UX Design Process <br />
                                3. Build a Real, Live UI/UX Project from Start to Finish <br />
                                4. Understand Design Thinking, UX Principles, and How to Create Portfolio-Worthy Case Studies <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. No prior design or technical experience required – this course is perfect for complete beginners! <br />
                                2. A computer or laptop with internet access <br />
                                3. A free Figma account – we’ll show you how to set it up if needed <br />
                                4. Curiosity, creativity, and a willingness to learn. <br />
                                5. (Optional but helpful) Basic understanding of how websites or mobile apps work. <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                1. Beginners who want to start a career in UI/UX design with no prior experience. <br />
                                2. Students or job seekers looking to build a strong portfolio and gain real-world design skills. <br />
                                3. Freelancers who want to offer UI/UX design services and land clients in 2025. <br />
                                4. Aspiring product designers who want to learn how to use Figma and AI tools to speed up their design process. <br />
                                5. Anyone curious about how real apps are designed from scratch, using modern tools and workflows. <br />
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
                type === "graphics" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] graphics-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Graphics Design</h1>
                            {/* <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p> */}
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                Learn Graphic Design Theory and the Basic Principles of Color Theory, Typography, Branding, Logo Design, Layout & More!.
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1. Intermediate to expert level knowledge of graphic design theory that you will immediately be able to apply to your career, job, hobby, or company. <br />
                                2. Major overview of the most common graphic design practices and the thought process behind these principles. <br />
                                3. Real-world, applicable projects that you can follow along with and practice. <br />
                                4. Experience and knowledge to take graphic design fundamentals and apply them in your everyday life. <br />
                                5. Color theory and how it applies to the world around us, from products and art to branding and advertising. <br />
                                6. Typography theory and how type plays a major role in both print mediums and digital media. <br />
                                7. photography composition and how it interacts with graphic design elements to create stunning looking artwork. <br />
                                8. Layout, user interface and experience design, and composition to understand how to control what you want the viewer to see. <br />
                                9. Logo design and branding, and the way that you or your company can use these ideas to get in the eyes of more people. <br />
                                10. Past and current design trends that you can use as a source for creating your own original work. <br />
                                11. Legal side of design and how you can take safe measures to make sure you are following the proper laws of copyright and trademarks. <br />
                                12. Step-By-Step process to becoming a graphic designer <br />
                                13. NEW! Learn some 2026 design trends to look out for with three new student projects <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. This course is for beginners to graphic design theory and for anyone who wants to learn the basic principles of color theory, typography, layout design, photography, logo design, branding, and more as it relates to graphic design. <br />
                                2. You will learn intermediate and advanced terminology that you can use to incorporate in graphic design, user interfaces, mobile app design, logo design, t-shirt design, and other digital or print mediums. <br />
                                3. Though programs like Adobe Photoshop CC and Canva are used throughout this course, you will not need them unless you would like to follow along.  <br />
                                4. The principles outlined in this course are transfereable to many applications, both digital and physical. <br />
                                Project files and resources can be found in available lessons located directly in this course. <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                This course is specifically design for beginners interested in graphic design theory. Philosophies and practical projects are given so that you not only understand the reasoning behind the theory, but you also get a chance to practice it to.
                            </p>
                            <p className=' mb-[20px]'>
                                This course is great for:
                                - Graphic Designers <br />
                                - Website Designers <br />
                                - Logo Designers <br />
                                - UI / UX Designers <br />
                                - Product Designers <br />
                                - T-Shirt Designers <br />
                                - Businesses <br />
                                - Marketers <br />
                                - Social Media Experts <br />
                                any anyone else interested in learning the fundamentals of graphic design theory!
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
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] backend-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Backend Development</h1>
                            {/* <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p> */}
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                Understand backend communication design patterns, protocols, execution and proxying
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1. Learn the fundamentals of backend engineering <br />
                                2. Backend communication design patterns <br />
                                3. Understand how backend communication protocols work <br />
                                4. Comprehend how OS Kernel communicate with Backend Applications <br />
                                5. Operating System fundamentals (Thread, Process, async IO in linux) <br />
                                6. Learn HTTP/1.1, HTTP/2, HTTP/3 <br />
                                7. Learn gRPC, WebRTC, WebSockets <br />
                                8. Learn TLS 1.2, TLS 1.3, QUIC 0RTT <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. Intermediate programming skills (1-2 years) <br />
                                2. Having built a backend application <br />
                                3. Basic network fundamentals <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                1. Backend Engineers <br />
                                2. FullStack Engineers <br />
                                3. Frontend Engineers interested in the Backend (must have built a backend app) <br />
                                4. Network engineers who want to get better at backend design <br />
                                5. Site reliability engineers <br />
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
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] lg:overflow-y-hidden w-[100vw] bg-white flex flex-col items-start lg:justify-between mb-[10vh]'>
                    <div className=' w-full h-[40vh] lg:h-[30vh] block mt-[20px] webDev-bg rounded-2xl mb-[10vh]'></div>
                    <div className=' w-full flex flex-col lg:flex-row items-start justify-between'>
                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[48px] font-semibold mb-[10px]'>Fronted Development</h1>
                            {/* <p className=' mb-[20px]'>
                                Welcome to the Complete Web Development training, the only course you need to learn to code and become a full-stack web developer
                            </p> */}
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>About this course</h1>
                            <p className=' mb-[20px]'>
                                Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps
                            </p>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Learning Outcomes</h1>
                            <p className=' mb-[20px]'>
                                1.  Build 16 web development projects for your portfolio, ready to apply for junior developer jobs. <br />
                                2. Learn the latest technologies, including Javascript, React, Node and even Web3 development. <br />
                                3. After the course you will be able to build ANY website you want. <br />
                                4. Build fully-fledged websites and web apps for your startup or business. <br />
                                5. Work as a freelance web developer. <br />
                                6. Master frontend development with React <br />
                                7. Master backend development with Node <br />
                                8. Learn professional developer best practices. <br />
                            </p>
                        </div>

                        <div className=' h-fit lg:w-[45%] w-full'>
                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Requirements</h1>
                            <p className=' mb-[20px]'>
                                1. No programming experience needed - I'll teach you everything you need to know. <br />
                                2. A computer with access to the internet. <br />
                                3. No paid software required. <br />
                                4. I’ll walk you through, step-by-step how to get all the software installed and set up. <br />
                            </p>

                            <h1 className=' text-[28px] font-semibold mb-[10px]'>Who is this course for?</h1>
                            <p className=' mb-[20px]'>
                                1. If you want to learn to code through building fun and useful projects, then take this course. <br />
                                2. If you want to start your own startup by building your own websites and web apps. <br />
                                3. If you are a seasoned programmer, then take this course to to get up to speed quickly with the latest frameworks and NodeJS <br />
                                4. If you want to take ONE COURSE and learn everything you need to know about web development, take this course <br />
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