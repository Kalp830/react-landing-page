import React from 'react'
import './ReadMoreCard.css'

const ReadMoreCard = ({img, imgName, title}) => {
  return (
    <div className='readmore-card'>
                <div className='relative w-full max-w-sm rounded-lg shadow-xl'>
                   <img src={img} alt={imgName} className='w-full h-full object-cover' />
                   <div className='absolute -bottom-3.5 left-0 right-0 bg-gray-100 px-4 py-5 text-center rounded-xl w-10/12 m-auto'>
                     <h3 className='font-semibold'>{title} </h3>  
                    <a href='#' className='text-green-600 font-semibold inline-block mt-2 hover:underline'> Readmore →</a>     
                   </div>
                </div>
    </div>
  )
}

export default ReadMoreCard