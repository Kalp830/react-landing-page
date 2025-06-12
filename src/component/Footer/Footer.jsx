import React from 'react'
import './Footer.css'
 import FooterLogo from '../../../public/images/Footer-logo.png'


const Footer = () => {
  // const footerLogo = "images/Footer-logo.png"
  return (
   <footer className="bg-black p-3">
       <div className="container px-5">
   <div className="grid grid-cols-4 py-14">
   <div class="col-span-1">
        <div class="footer-logo">
        <img src={FooterLogo} alt='footer-logo'/>
        <div className='pt-10'>
        <p className="text-white opacity-70">Copyright ©️ 2020 Nexcent Ltd.</p>
        <p className="text-white opacity-70">All rights reserved</p>
        </div>
         <div className="social-media-links">
          <div className='flex gap-3 text-white opacity-85 pt-5'>
            <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href='#'><i class="fa fa-dribbble" aria-hidden="true"></i></a>
            <a href='#'><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href='#'><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
          </div>
          <div className='flex gap-3 text-white opacity-85 pt-5'></div>
         </div>
       </div>
   </div>

   <div class="col-span-1 footer-listing">
    <h1>Company</h1>
    <ul >
      <li><a href='#'>About us</a></li>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Contact us</a></li>
      <li><a href='#'>Pricing</a></li>
      <li><a href='#'>Testimonials</a></li>
    </ul>
   </div>

     <div class="col-span-1 footer-listing">
    <h1>Support</h1>
    <ul >
      <li><a href='#'>Help center</a></li>
      <li><a href='#'>Terms of service</a></li>
      <li><a href='#'>Legal</a></li>
      <li><a href='#'>Privacy policy</a></li>
      <li><a href='#'>Status</a></li>
    </ul>
   </div>

 <div class="col-span-1 footer-listing">
    <h1>Stay up to date</h1>
  <div className='relative  w-64'>
   <input
  type="email"
  placeholder="Your email address"
  class="w-64 px-4 py-2 bg-gray-700 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
<div class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-white hover:text-blue-500">
    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
  </div>
</div>

   </div>
         </div>
       </div>
   </footer>
  )
}

export default Footer