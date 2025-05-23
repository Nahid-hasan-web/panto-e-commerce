import React from 'react'
import Banner from '../components/Banner'
import WhyChoosingUs from '../components/WhychooseUse'
import { VscDebugBreakpointUnsupported } from 'react-icons/vsc'
import BestSelling from '../components/bestSelling'
import Experience from '../components/Experience'
import Materials from '../components/Materials'
import Reviews from '../components/Reviews'

const Home = () => {
    return (
        <>
        
            
            <Banner />
            <WhyChoosingUs />   
            <BestSelling />
            <Experience />
            <Materials />
            <Reviews />
        </>
  )
}

export default Home