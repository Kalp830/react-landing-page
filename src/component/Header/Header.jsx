import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='bg-header'>
      <div className='container mx-auto'>
         <div className='grid grid-cols-3 items-center'>
            <div className='col-span-1'>
                  <div className='header-logo'><img src={logo}></img></div>
            </div>
            <div className='col-span-1'>
                 <Navbar/>
            </div>
            <div className='col-span-1'>
              <div className='flex justify-end gap-10 items-center'>
                <a href='#' className='text-green-600'>Login</a>
                <button className='btn bg-green-600 rounded-md py-2 px-5 text-white'>Sign up</button>
              </div>
            </div>
         </div>
      </div>
   </header>
   
  )
}

export default Header