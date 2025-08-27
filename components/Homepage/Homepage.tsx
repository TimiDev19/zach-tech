import React from 'react'
import Hero from './sections/Hero'
import OurServices from './sections/OurServices'
import WhyUs from './sections/WhyUs'
import ProjectVideo from './sections/ProjectVideo'
import Mission from './sections/Mission'
import Vision from './sections/Vision'
import CoreValue from './sections/Corevalue'
import Expertise from './sections/Expertise'
import Team from './sections/Team'
import Client from './sections/Client'
import Partners from './sections/Partners'
import Contact from './sections/Contact'

const Homepage = () => {
    return (
        <div className=" w-[100vw] h-[auto] overflow-y-scroll scroll-smooth">
            <Hero />
            <OurServices />
            <WhyUs />
            <ProjectVideo />
            <Mission />
            <Vision />
            <CoreValue />
            <Expertise />
            <Team />
            <Client />
            <Partners />
            <Contact />
        </div>
    )
}

export default Homepage