import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';
import InfiniteCarousel from '@/components/Carousel';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});


const Partners = () => {
    return (
        <div id="partners" className='pt-[100px]'>
            <h1 className={` text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Partners</span></h1>
            <InfiniteCarousel />
        </div>
    )
}

export default Partners