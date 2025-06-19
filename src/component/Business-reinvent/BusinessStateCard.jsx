import React from 'react'

const BusinessStateCard = ({img, count, subTitle}) => {
  return (
        <div className='col-span-1 flex items-center my-4'>
        <img src={img} alt={subTitle}/>
        <div className='flex-col pl-4'>
        <h3 className='text-2xl font-bold'>{count}</h3>
        <p className='opacity-50'>{subTitle}</p>
        </div>
        </div>
  )
}

export default BusinessStateCard