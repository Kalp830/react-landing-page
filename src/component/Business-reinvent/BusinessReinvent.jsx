import React from 'react'
import './BusinessReinvent.css'
import BusinessStateCard from './BusinessStateCard';
import {localBusiness} from '../../data'

const BusinessReinvent = () => {
  return (
    <section className='business-reivnt container'>
         <div className='grid grid-cols-2 p-10 items-center'>
            <div className='col-span-1'>
                <h2 className='text-4xl font-semibold pl-5'>Helping a local  <br/> <span className='text-green-600'> business reinvent itself</span></h2>
                <p className='pl-5 pt-2'>We reached here with our hard work and dedication</p>
            </div>
            <div className='col-span-1'>
                <div className='grid grid-cols-2'>
                  {localBusiness.map((item, index)=>(
                   <BusinessStateCard  
                   key={index}
                   img={item.img}
                   count={item.count}
                   subTitle={item.subTitle}/>
                  ))};
                </div>  
            </div>
         </div>
        
    </section>
  )
}

export default BusinessReinvent