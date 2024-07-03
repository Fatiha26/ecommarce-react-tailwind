import React from 'react'
import { downNav } from '../constants/data'
const DownNav = () => {
  return (
    <>
       <div className='fixed z-20 bg-white w-full flex flex-row justify-evenly'>
            {downNav.map((link,index)=>(
                <li key={index} className='py-4 border-t-4 transition delay-75 border-transparent hover:border-pink-500'>
                  <a href="#" className='text-2xl '>{link.feature}
                  </a>
                </li>
            ))}
        </div>
    </>
  )
}

export default DownNav
