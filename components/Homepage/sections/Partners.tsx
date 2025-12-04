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
            <h1 className=' text-[14px] lg:text-[18px]  w-[95%] lg:w-[65%] mx-auto text-justify mb-[20px]'>
                We’re proud to collaborate with industry-leading organizations who share our commitment to excellence, innovation, and impact. Together, we combine expertise, resources, and vision to deliver meaningful results for the communities and clients we serve. Explore the partners who help make our mission possible.
            </h1>
            <InfiniteCarousel />

            {/*  */}
        </div>
    )
}

export default Partners