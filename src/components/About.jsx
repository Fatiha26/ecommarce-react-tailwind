import React from 'react'
import { about } from '../constants/data'

const About = () => {
  return (
    <>
      <div className='grid grid-cols-4'>
      {
        about.map((item,index)=>(
            <div key={index} style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)), url(${item.src})`
                  }} className='w-full bg-no-repeat bg-cover bg-center  h-[400px]'>
               <div className='flex justify-center items-center flex-col pt-44'>
               <h1 className='text-xl tracking-wider text-white font-bold'>{item.text}</h1>
            </div>
         </div>
        ))
      }
      </div>
      
    </>
  )
}

export default About
