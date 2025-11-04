import Footer from '@/components/Homepage/sections/Footer';
import Services from '@/components/Services';
import Link from 'next/link'
import React from 'react'

export default async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params; // ✅ unwrap Promise

    return (
        <div className=' h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll text-white'>
            <Services type={id} />
            <Footer />
        </div>
    )
}