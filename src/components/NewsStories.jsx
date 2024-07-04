import React from 'react'
import { offer } from '../constants/data'
const NewsStories = () => {
  return (
    <>
    <div className='my-12'>
        <h1 className='text-center text-6xl font-bold'>Latest News & Offers</h1>
        <div className='grid grid-cols-3 gap-8'>
           {offer.map((item,index)=>(
            <div className='bg-white shadow shadow-gray-400' key={index}>
                <img src={item.offer} alt="" />
                <p>Offer</p>
                <p>{item.otext}</p>
            </div>
           ))}
        </div>
    </div>
    </>
  )
}

export default NewsStories
