import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar-nav'>
        <ul className='flex justify-between'>
            <li><Link to="/" className='nav-item'>Home</Link></li>
            <li><Link to="/service" className='nav-item'>Service</Link></li>
            <li><Link to="/feature" className='nav-item'>Feature</Link></li>
            <li><Link to="/product" className='nav-item'>Product</Link></li>
            <li><Link to="/testimonial" className='nav-item'>Testimonial</Link></li>
            <li><Link to="/faq" className='nav-item'>FAQ</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar