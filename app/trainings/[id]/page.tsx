import Footer from '@/components/Homepage/sections/Footer';
import Services from '@/components/Services';
import Trainings from '@/components/Trainings';
import Link from 'next/link'
import React from 'react'

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params; // ✅ unwrap Promise

    return (
        <div className=' min-h-[100vh] w-[100vw] lg:h-[100vh] lg:overflow-y-hidden overflow-x-hidden overflow-y-scroll text-white no-scrollbar'>
            <Trainings type={id} />
            {/* <Footer /> */}
        </div>
    )
}