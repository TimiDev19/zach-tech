import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';
import InfiniteCarousel from '@/components/Carousel';
import { FadeInFromBottom } from '@/components/FadeInFromBottom';
import ClientScroll from '@/components/ClientScroll';
import { FadeInFromTop } from '@/components/FadeInFromTop';
import PartnerScroll from '@/components/PartnerScroll';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});


const Partners = () => {
    return (
        <div id="partners" className='pt-[100px] bg-white'>
            <h1 className={` text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Partners</span></h1>
            {/* <InfiniteCarousel /> */}

            <div className=' w-[95%] mx-auto min-h-[50vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                <div className=' lg:w-[47%] w-full mb-[20px]'>
                    <FadeInFromTop>
                        <h1 className=' text-xl  max-sm:text-xl w-full mx-auto text-justify'>
                            We’re proud to collaborate with industry-leading organizations who share our commitment to excellence, innovation, and impact. Together, we combine expertise, resources, and vision to deliver meaningful results for the communities and clients we serve. Explore the partners who help make our mission possible.
                        </h1>
                    </FadeInFromTop>
                </div>

                <div className=' lg:w-[47%] w-full h-[40vh] mb-[20px]'>
                    <FadeInFromBottom>
                        <PartnerScroll />
                    </FadeInFromBottom>
                </div>
            </div>
        </div>
    )
}

export default Partners