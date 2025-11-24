import { FadeInFromBottom } from '@/components/FadeInFromBottom'
import { FadeInFromLeft } from '@/components/FadeInFromLeft'
import { FadeInFromTop } from '@/components/FadeInFromTop'
import React from 'react'

const MissionVision = () => {
    return (
        <div id='about' className=' lg:h-[80vh] w-[100vw] bg-white pt-[85px]'>
            <div className=' min-h-[65dvh] w-[100dvw] flex items-center justify-center flex-col lg:flex-row'>
                <div className=' min-h-[65vh] w-[90%] lg:w-[25vw] mx-[20px] cursor-pointer hover:rotate-[10deg] duration-500 flex flex-col items-end justify-end relative bg-transparent'>
                    <div className=' h-[100%] w-[100%] absolute z-[20] mx-auto bg-transparent pt-[10%]'>
                        <div className=' uppercase font-extrabold text-xl h-[50px] w-[50%] bg-[#EEAD0E] rounded-full mx-auto flex items-center justify-center'>
                            Mission
                        </div>

                        <h1 className=' text-7xl mx-auto text-center mt-[10px] mb-[20px]'>🎯</h1>

                        <h1 className=' text-3xl font-extrabold text-center mb-[20px] text-white'>Empower & Impact</h1>

                        <p className=' w-[80%] mx-auto justify-center text-white text-justify'>To empower individuals and organizations by delivering innovative, future-ready technology solutions that drive growth, unlock potential, and create lasting impact.</p>
                    </div>

                    <div className=' h-[90%] w-full bg-[#000033] shadow-md shadow-slate-300 rounded-xl absolute'></div>
                </div>

                <div className=' min-h-[65vh] w-[90%] lg:w-[25vw] mx-[20px] cursor-pointer hover:rotate-[10deg] duration-500 flex flex-col items-end justify-end relative bg-transparent'>
                    <div className=' h-[100%] w-[100%] absolute z-[20] mx-auto bg-transparent pt-[10%]'>
                        <div className=' uppercase font-extrabold text-xl h-[50px] w-[50%] bg-[#EEAD0E] rounded-full mx-auto flex items-center justify-center'>
                            Vision
                        </div>

                        <h1 className=' text-7xl mx-auto text-center mt-[10px] mb-[20px]'>🚀</h1>

                        <h1 className=' text-3xl font-extrabold text-center mb-[20px] text-white'>Lead & Transform</h1>

                        <p className=' w-[80%] mx-auto justify-center text-white text-justify'>To be a leading force in global technology transformation—pushing the boundaries of possibility, fostering innovation, and shaping a smarter, more connected world.</p>
                    </div>

                    <div className=' h-[90%] w-full bg-[#000033] shadow-md shadow-slate-300 rounded-xl absolute'></div>
                </div>

                <div className=' min-h-[65vh] w-[90%] lg:w-[25vw] mx-[20px] cursor-pointer hover:rotate-[10deg] duration-500 flex flex-col items-end justify-end relative bg-transparent'>
                    <div className=' h-[100%] w-[100%] absolute z-[20] mx-auto bg-transparent pt-[10%]'>
                        <div className=' uppercase font-extrabold text-xl h-[50px] w-[50%] bg-[#EEAD0E] rounded-full mx-auto flex items-center justify-center'>
                            Values
                        </div>

                        <h1 className=' text-7xl mx-auto text-center mt-[10px] mb-[20px]'>💎</h1>

                        <h1 className=' text-3xl font-extrabold text-center mb-[20px] text-white'>Excellence & Integrity</h1>

                        <p className=' w-[80%] mx-auto justify-center text-white text-justify'>Driven by innovation, excellence, and integrity—putting clients first, embracing collaboration, and continuously learning to deliver impactful solutions.</p>
                    </div>

                    <div className=' h-[90%] w-full bg-[#000033] shadow-md shadow-slate-300 rounded-xl absolute'></div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision