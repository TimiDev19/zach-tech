import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import AutoScrollingSlider from '@/components/AutoScrollSlider';
import { FadeInFromBottom } from '@/components/FadeInFromBottom';
import { FadeInFromTop } from '@/components/FadeInFromTop';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Expertise = () => {
    return (
        <div className={` bg-white w-[100vw] px-[2.5%] pb-[30px]`}>
            <h1 className={`text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Expertise</span></h1>
            <div className=' w-full text-center'>
                <h1 className=' mb-[50px] text-2xl max-sm:text-xl mx-auto'>Our expertise spans a wide array of cutting-edge domains, including:</h1>
                {/* <h1 className=' text-3xl  max-sm:text-xl w-[55%] max-sm:w-full mx-auto text-justify'>
                    Custom Software Development (Web & Mobile).
                    Al and Machine Learning Solutions.
                    Data Analytics and Business Intelligence.
                    Home Automation & IoT Systems.
                    Embedded Systems Development.
                    Technology Training & Consulting.
                </h1> */}
                <div className=' w-[95%] mx-auto min-h-[50vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                    <div className=' lg:w-[47%] w-full h-[40vh] mb-[20px]'>
                        <FadeInFromBottom>
                            <AutoScrollingSlider />
                        </FadeInFromBottom>
                    </div>

                    <div className=' lg:w-[47%] w-full mb-[20px]'>
                        <FadeInFromTop>
                            <h1 className=' text-3xl  max-sm:text-xl w-full mx-auto text-justify'>
                                Custom Software Development (Web & Mobile).
                                Al and Machine Learning Solutions.
                                Data Analytics and Business Intelligence.
                                Home Automation & IoT Systems.
                                Embedded Systems Development.
                                Technology Training & Consulting.
                            </h1>
                        </FadeInFromTop>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise