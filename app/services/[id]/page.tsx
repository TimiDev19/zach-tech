import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=' h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll text-white'>
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
            <div className=' h-[100vh] w-[100vw] bg-gradient-to-b to-[#000033] from-[#EEAD0E]'></div>
        </div>
    )
}

export default page