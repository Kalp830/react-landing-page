import React from 'react'
import './CTA.css'
const CTA = () => {
  return (
    <div className='container cta-bg'>
        <div className='grid grid-cols-1'>
            <div className='col-span-1 text-center'>
             <h2 className='text-7xl font-normal leading-tight'>Pellentesque suscipit <br/> fringilla libero eu.</h2>
          <button className='rounded-md bg-green-600 p-3 w-40 mt-10 text-white items-center '>Get a demo 
            <i class="fa fa-long-arrow-right opacity-70 pl-2" aria-hidden="true"></i></button>
          </div>
        </div>
    </div>
  )
}

export default CTA