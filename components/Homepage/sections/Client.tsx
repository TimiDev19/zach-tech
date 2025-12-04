import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';
import InfiniteCarousel from '../InfiniteCarousel';
import { FadeInFromBottom } from '@/components/FadeInFromBottom';
import ClientScroll from '@/components/ClientScroll';
import { FadeInFromTop } from '@/components/FadeInFromTop';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Client = () => {
    return (
        <div id="clients" className='pt-[100px] relative h-auto bg-white'>
            <h1 className={` text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Clients</span></h1>
            <h1 className=' text-[14px] lg:text-[18px]  w-[95%] lg:w-[65%] mx-auto text-justify mb-[20px]'>
                Our clients are leaders in their fields, and we’re proud to help them turn bold ideas into meaningful outcomes. Through collaboration, innovation, and a deep understanding of their goals, we deliver work that creates measurable impact and lasting value.
            </h1>
            <InfiniteCarousel />
            {/* <div className=' w-[95%] mx-auto min-h-[50vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                <div className=' lg:w-[47%] w-full h-[40vh] mb-[20px]'>
                    <FadeInFromBottom>
                        <ClientScroll />
                    </FadeInFromBottom>
                </div>

                <div className=' lg:w-[47%] w-full mb-[20px]'>
                    <FadeInFromTop>
                        <h1 className=' text-xl  max-sm:text-xl w-full mx-auto text-justify'>
                            Our clients are leaders in their fields, and we’re proud to help them turn bold ideas into meaningful outcomes. Through collaboration, innovation, and a deep understanding of their goals, we deliver work that creates measurable impact and lasting value.
                        </h1>
                    </FadeInFromTop>
                </div>
            </div> */}
        </div>
    )
}

export default Client