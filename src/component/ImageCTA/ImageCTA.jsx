import React from 'react'


const ImageCTA = ({imageSrc, imageAlt, imageTitle, imageDesc, buttonTxt }) => {
  return (
    <section className='image-CTA'>
        <div className='grid grid-cols-2 items-center my-10'>
          <div className='col-span-1'>
               <div className='flex justify-center '>
                 <img src={imageSrc} alt={imageAlt} className='max-w-full h-auto' />
              </div>
          </div>
           <div className='col-span-1'>
               <div className='right-content p-5'>
                <span className='text-5xl font-semibold'>{imageTitle}</span>
                <p className='pt-7 pr-11'>{imageDesc}</p>
                <button className='rounded-md bg-green-600 p-4 w-40 mt-10 text-white items-center '>{buttonTxt}</button>
              </div>
          </div>
        </div>
    </section>
  ) 
}

export default ImageCTA