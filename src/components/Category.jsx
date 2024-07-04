import React from 'react'
import c1 from '../assets/image/j1.jpg'
import c2 from '../assets/image/j2.jpg'
import p5 from '../assets/image/p5.jpg'

const Category = () => {
  return (
    <div>
      <div className='grid grid-cols-2 w-full h-screen'>
         <div style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)), url(${c1})`
                  }} className='w-full bg-no-repeat bg-cover bg-center h-screen'>
               <div className='flex justify-center items-center flex-col pt-64'>
               <h1 className='text-3xl text-white font-bold'>Silver Collection </h1>
               <p className='text-xl text-white'>Explore Jewellery</p>
               <button className='w-32 h-12 bg-black text-white text-xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
            </div>
         </div>
         <div style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)), url(${c2})`
                  }} className='w-full  h-screen bg-no-repeat bg-center bg-cover'>
             <div className='flex justify-center items-center flex-col pt-64'>
               <h1 className='text-3xl text-white font-bold'>Diamond Collection </h1>
               <p className='text-xl text-white'>Explore Jewellery</p>
               <button className='w-32 h-12 bg-black text-white text-xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
            </div>
         </div>
        <div>
      </div>     
      </div>
      <div style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)), url(${p5})`
                  }} className='w-full  h-screen bg-no-repeat bg-top bg-cover'>
             <div className='flex justify-center items-center flex-col pt-64'>
               <h1 className='text-3xl text-white font-bold'>Girl&apos;s Collection </h1>
               <p className='text-xl text-white'>Explore Collection</p>
               <button className='w-32 h-12 bg-black text-white text-xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
            </div>
         </div>
    </div>
  )
}

export default Category
