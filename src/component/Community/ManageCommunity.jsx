import React from 'react'
import './ManageCommunity.css'
import membarImg from '../../images/membership.svg'
import nationalImg from '../../images/national.svg'
import clubImg from '../../images/club.svg'

const ManageCommunity = () => {
    const communityCard = [
        {src: membarImg, title:"Membership Organisations", desc:"Our membership management software provides full automation of membership renewals and payments"},
        {src: nationalImg, title:"National Associations", desc:"Our membership management software provides full automation of membership renewals and payments"},
        {src: clubImg, title:"Clubs And Groups", desc:"Our membership management software provides full automation of membership renewals and payments"}
    ]

  return (
    <section className='manag-community'>
          <div className='title '>
            <h3 className='leading-11'>Manage your entire community <br/> in a single system</h3>
            <p className='text-black opacity-75 pt-6'>Who is Nextcent suitable for?</p>
          </div>
          <div className='card-box'>
                <div className="grid grid-cols-3 p-10 gap-10">
            {communityCard.map((item, index)=> (
                <div className="col-span-1 max-w-lg rounded-2xl shadow-lg overflow-hidden bg-white p-10" key={index}>
                <img className="rounded-xl mx-auto text-center" src={item.src} alt="Card Image" />
                <div className="mt-9">
                <h2 className="font-bold text-gray-800 text-2xl text-center">{item.title}</h2>
                <p className="mt-2 text-gray-600 text-sm text-center">{item.desc}</p>
                </div>
                </div>
            ))}
                  </div>
          </div>
    </section>
  )
}

export default ManageCommunity