import React from 'react'
import ReadMoreCard from './ReadMoreCard';
import mktImg1 from '../../images/readmore-img/img-1.jpg';
import mktImg2 from '../../images/readmore-img/img-2.jpg';
import mktImg3 from '../../images/readmore-img/img-3.jpg';

const ReadMoreSection = () => {
  return (
    <section className='read-more py-4'>
        <div className='w-1/2 text-center m-auto'>
        <h2 className='text-4xl font-semibold'>Caring is the new marketing</h2>
        <p className='my-4'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
            See who's joining the community, read about how our community are 
            increasing their membership income and lot's more.​</p>
            </div>
             <div className='flex justify-center gap-7 py-14'>
            <ReadMoreCard  img={mktImg1} title="Creating Streamlined Safeguarding Processes with OneRen."/>
            <ReadMoreCard  img={mktImg2} title="What are your safeguarding responsibilities and how can you manage them?"/>
            <ReadMoreCard  img={mktImg3} title="Revamping the Membership Model with Triathlon Australia"/>
            </div>
    </section>
  )
}

export default ReadMoreSection