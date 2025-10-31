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
import Footer from './sections/Footer'
import MissionVision from './sections/MissionVision'
import Carousel from '../Carousel'
import InfiniteCarousel from './InfiniteCarousel'
import Training from './sections/Training'

const Homepage = () => {
    return (
        <div className=" w-[100vw] h-[auto] overflow-y-scroll overflow-x-hidden scroll-smooth">
            <Hero />
            <OurServices />
            <WhyUs />
            <ProjectVideo />
            <MissionVision />
            {/* <Mission />
            <Vision />
            <CoreValue /> */}
            <Expertise />
            <Training />
            <Team />
            <Client />
            <Partners />
            <Contact />
            <Footer />
        </div>
    )
}

export default Homepage