import React from 'react'
import c1 from '../assets/image/j1.jpg'
import c2 from '../assets/image/j2.jpg'

const Category = () => {
  return (
    <div>
      <div className='grid grid-cols-2 w-full h-screen'>
         <div style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), 
                          rgba(0, 0, 0, 0.3)), url(${c1})`
                  }} className='w-full bg-no-repeat bg-cover bg-center h-screen'>
               <div className='flex justify-center items-center flex-col pt-44'>
               <h1 className='text-5xl text-white font-bold'>Women&apos;s Collection </h1>
               <button className='w-40 h-12 bg-black text-white text-2xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
            </div>
         </div>
         <div style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)), url(${c2})`
                  }} className='w-full  h-screen bg-no-repeat bg-center bg-cover'>
             <div className='flex justify-center items-center flex-col pt-44'>
               <h1 className='text-5xl text-white font-bold'>Women&apos;s Collection </h1>
               <button className='w-40 h-12 bg-black text-white text-2xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
            </div>
         </div>
         <div>

         </div>
      
      </div>
      <div>
          
      </div>
    </div>
  )
}

export default Category
