import React from 'react'
import Logo from '../../images/our-clients/Logo.png'
import Logo1 from '../../images/our-clients/Logo-1.png'
import Logo2 from '../../images/our-clients/Logo-2.png'
import Logo3 from '../../images/our-clients/Logo-3.png'
import Logo4 from '../../images/our-clients/Logo-4.png'
import Logo5 from '../../images/our-clients/Logo-5.png'
import Logo6 from '../../images/our-clients/Logo-6.png'
import './OurClients.css'

const OurClients = () => {
    const clientLogo = [
    { src: Logo, alt: "logo" },
    { src: Logo1, alt: "logo1" },
    { src: Logo2, alt: "logo2" },
    { src: Logo3, alt: "logo3" },
    { src: Logo4, alt: "logo4" },
    { src: Logo5, alt: "logo5" },
    { src: Logo6, alt: "logo6" },
    ]
  return (
    <section className='our-clients'>
    <div className='container mx-auto px-5'>
        <div className='grid grid-cols-1'>
          <div className='title'>
            <h3>Our Clients</h3>
            <p className='text-black opacity-75'>We have been working with some Fortune 500+ clients</p>
          </div>
             <div className="col-span-1 flex justify-between">
                {clientLogo.map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className='h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto'  />
                ))}
             </div>
        </div>
    </div>
    </section>
  )
}

export default OurClients