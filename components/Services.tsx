import Link from 'next/link'
import React from 'react'

type ServicesProps = {
    type: string;
};

const Services = ({ type }: ServicesProps) => {
    return (
        <div className=' min-h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll text-white'>
            {
                type === "web" &&
                <div className=' pt-[85px] p-[2.5%] h-[100vh] w-[100vw] bg-gradient-to-b from-[#000033] to-[#EEAD0E] flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Web Development</h1>
                        <p className=' mb-[10px]'>
                            Blog website, serach engine optimization (SEO), corpoare website, Real estate website, SME website, eCommerce website, dating website, website upgrading and scaling, host migration.
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-[65%] flex flex-col items-start justify-center webDev-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "ui" &&
                <div className=' pt-[85px] p-[2.5%] h-[100vh] w-[100vw] bg-gradient-to-b from-[#000033] to-[#EEAD0E] flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Ui/Ux Design</h1>
                        <p className=' mb-[10px]'>
                            Wireframing, UI design (mobile and website), UX design (mobile and website), Rebranding, Graphic design ,Motion pictures
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-[65%] flex flex-col items-start justify-center uiux-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "graphics" &&
                <div className=' pt-[85px] p-[2.5%] h-[100vh] w-[100vw] bg-gradient-to-b from-[#000033] to-[#EEAD0E] flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Graphics Design</h1>
                        <p className=' mb-[10px]'>
                            Figma, Corel draw, Photoshop Rebranding, Graphic design, Polotno studio, Motion pictures
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-[65%] flex flex-col items-start justify-center graphics-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "mobile" &&
                <div className=' pt-[85px] p-[2.5%] h-[100vh] w-[100vw] bg-gradient-to-b from-[#000033] to-[#EEAD0E] flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Mobile Development</h1>
                        <p className=' mb-[10px]'>
                            Figma, Corel draw, Photoshop Rebranding, Graphic design, Polotno studio, Motion pictures
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-[65%] flex flex-col items-start justify-center mobile-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "backend" &&
                <div className=' pt-[85px] p-[2.5%] h-[100vh] w-[100vw] bg-gradient-to-b from-[#000033] to-[#EEAD0E] flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Backend Development</h1>
                        <p className=' mb-[10px]'>
                            Server maintenance,web hosting,server migration and much more.
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-[65%] flex flex-col items-start justify-center backend-bg rounded-2xl'></div>
                </div>
            }
            <div className=' min-h-[100vh] w-[100vw] bg-gradient-to-b to-[#000033] from-[#EEAD0E] pt-[90px] px-[2.5%]'>
                <h1 className=' font-extrabold text-3xl lg:text-7xl mb-[50px] text-center'>Our Process</h1>
                <div className=' w-full grid grid-cols-1 lg:grid-cols-3 mb-[20px]'>
                    <div className=' mx-2'>
                        <div className=' h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>1</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Strategic Consultation</h1>
                        <p>
                            We kick off with a strategic consultation to understand your brand, goals, and audience.
                        </p>
                    </div>

                    <div className=' mx-2'>
                        <div className=' h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>2</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Collaboration</h1>
                        <p>
                            We collaborate closely to ensure the end result meets your expectations and makes you happy.
                        </p>
                    </div>

                    <div className=' mx-2'>
                        <div className=' h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>3</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Delivery</h1>
                        <p>
                            Our delivery rate is 100%; our clients deserve nothing less.
                        </p>
                    </div>
                </div>
                <div className=' w-[90%] h-[50vh] border border-[#EEAD0E] mx-auto flex flex-col items-center justify-center'>
                    <h1 className=' font-semibold text-3xl lg:text-5xl'>Read to build something great?</h1>
                    <Link
                        href={"/contact"}
                        className=' py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-white transition-all duration-500'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services