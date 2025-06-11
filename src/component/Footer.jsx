import React from 'react'



const Footer = () => {
  return (
   <footer className="bg-black p-3">
       <div className="container mx-auto px-4">
   <div className="grid grid-cols-4 gap-4 py-14">
   <div class="col-span-1">
        <div class="footer-logo">
        <img src='images/Footer-logo.png' alt='footer-logo'/>
        <div className='pt-10'>
        <p className="text-white opacity-70">Copyright ©️ 2020 Nexcent Ltd.</p>
        <p className="text-white opacity-70">All rights reserved</p>
        </div>
         <div className="social-media-links">
          <div className='flex gap-3 text-white'>
            <a href=''>Social</a>
            <a href=''>Social</a>
            <a href=''>Social</a>
            <a href=''></a>
          </div>
         </div>
       </div>
   </div>
 
         </div>
       </div>
   </footer>
  )
}

export default Footer