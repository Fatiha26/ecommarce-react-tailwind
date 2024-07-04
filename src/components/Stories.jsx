import React from 'react'
import pic1 from '../assets/image/k2.jpg'
import pic2 from '../assets/image/s1.jpg'
import pic3 from '../assets/image/c1.jpeg'

const Stories = () => {
  return (
    <>
       <div className='my-16 text-center'>
        <h1 className='text-center text-4xl font-bold'>Stories</h1>
        <div className='grid grid-cols-[60%_40%] gap-8 px-12 py-12'>
            <img src={pic1} alt="" />
            <div>
            <img src={pic2} alt="" />
            <img src={pic3} alt="" />
            </div>
        </div>
       </div>
    </>
  )
}

export default Stories
