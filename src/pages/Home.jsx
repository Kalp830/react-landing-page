import React from 'react'
import CTA from '../component/CTA-Section/CTA'
import HeroSlider from '../component/HeroSlider/HeroSlider'
import OurClients from '../component/OurClients/OurClients'
import ManageCommunity from '../component/Community/ManageCommunity'
import ImageCTA from '../component/ImageCTA/ImageCTA'
import CtaImg from '../images/cta-img.svg'
import MobileImg from '../images/site-footer.svg'
import BusinessReinvent from '../component/Business-reinvent/BusinessReinvent'

const Home = () => {
  return (
    <>
    {/* <HeroSlider/> */}
    
    <OurClients/>
    <ManageCommunity/>
    <ImageCTA
    imageSrc={CtaImg}
    imageAlt="Pixelgrad-img"
    imageTitle="The unseen of spending three years at Pixelgrade"
    imageDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    buttonTxt="Learn More"
    />
     <BusinessReinvent/>
     <ImageCTA
    imageSrc={MobileImg}
    imageAlt="Pixelgrad-img"
    imageTitle="How to design your site footer like we did"
    imageDesc="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
    buttonTxt="Learn More"
    />
    <CTA/>
    </>
  )
}

export default Home