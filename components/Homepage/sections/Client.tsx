import React from 'react'
import { Goldman } from 'next/font/google';
import Image from 'next/image';
import techstack from '@/helpers/helpers';
import InfiniteCarousel from '../InfiniteCarousel';

const goldman = Goldman({
    subsets: ['latin'],
    weight: ['400', '700'], // Available weights
    display: 'swap',
});

const Client = () => {
    return (
        <div id="clients" className='pt-[100px] relative h-auto bg-white'>
            <h1 className={` text-center text-[#000033] text-[45px] mb-4`}>Our <span className=' text-[#EEAD0E]'>Clients</span></h1>
            <InfiniteCarousel />
        </div>
    )
}

export default Client