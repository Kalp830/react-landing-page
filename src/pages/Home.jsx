import React from 'react'
import CTA from '../component/CTA-Section/CTA'
import HeroSlider from '../component/HeroSlider/HeroSlider'
import OurClients from '../component/OurClients/OurClients'
import ManageCommunity from '../component/Community/ManageCommunity'

const Home = () => {
  return (
    <>
    {/* <HeroSlider/> */}
    
    <OurClients/>
    <ManageCommunity/>
    <CTA/>
    </>
  )
}

export default Home