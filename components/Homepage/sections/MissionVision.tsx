import { FadeInFromTop } from '@/components/FadeInFromTop'
import React from 'react'

const MissionVision = () => {
    return (
        <div id='about' className=' lg:h-[100vh] w-[100vw] bg-white pt-[85px]'>
            <FadeInFromTop>
                <div className=' h-full w-full flex flex-col lg:flex-row items-center justify-between px-[2%]'>
                    <div className=' w-[95%] lg:w-[30%] h-[60vh] max-sm:mb-[20px] lg:h-[85%] bg-[#EEAD0E]/60 border-2 rounded-xl border-[#EEAD0E]/80 backdrop-blur-md text-[#000033] cursor-pointer hover:bg-[#EEAD0E]/40 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] mission-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Our Mission</h1>
                            <p>
                                To empower individuals and organizations by delivering innovative, future-ready technology solutions that drive growth, unlock potential, and create lasting impact.
                            </p>
                        </div>
                    </div>

                    <div className=' w-[95%] lg:w-[30%] h-[60vh] max-sm:mb-[20px] lg:h-[85%] bg-[#EEAD0E]/60 border-2 rounded-xl border-[#EEAD0E]/80 backdrop-blur-md text-[#000033] cursor-pointer hover:bg-[#EEAD0E]/40 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] vision-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Our Vision</h1>
                            <p>
                            To be a leading force in global technology transformation—pushing the boundaries of possibility, fostering innovation, and shaping a smarter, more connected world.
                            </p>
                        </div>
                    </div>

                    <div className=' w-[95%] lg:w-[30%] h-[60vh] max-sm:mb-[20px] lg:h-[85%] bg-[#EEAD0E]/60 border-2 rounded-xl border-[#EEAD0E]/80 backdrop-blur-md text-[#000033] cursor-pointer hover:bg-[#EEAD0E]/40 transition-all duration-300 p-[20px] flex-col items-center justify-start'>
                        <div className=' w-full h-[45%] core-bg rounded-t-xl mb-[30px]'></div>
                        <div className=' w-full'>
                            <h1 className=' text-2xl font-extrabold'>Our Core Values</h1>
                            <p>
                            At ZachTech Industries, we are driven by innovation, excellence, and integrity — putting our clients first, embracing collaboration, and continuously learning to deliver impactful technology solutions that shape the future.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInFromTop>
        </div>
    )
}

export default MissionVision