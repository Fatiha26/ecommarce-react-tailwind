import React, { useState } from 'react'
import { sliders } from '../constants/data'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {

    const [curImg, setcurImg] = useState(0);
    const prevSlide = () => {
        const isFirstIndex = curImg === 0;
        const newIndex = isFirstIndex ? sliders.length -1 : curImg -1;
        setcurImg(newIndex);
    }
    const nextSlide = () => {
        const isLastIndex = curImg === sliders.length -1;
        const newIndex = isLastIndex ? 0 : curImg +1;
        setcurImg(newIndex);
    }

  return (
    <div className='max-w-[1200px] h-[780px]
    w-full m-auto py-16 px-4 relative group'>
      <div style={{backgroundImage: `url(${sliders[curImg].src})`}}
      className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full 
      p-2 bg-black/20 text-white cursor-pointer'>
        <FaChevronLeft onClick={prevSlide} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full 
      p-2 bg-black/20 text-white cursor-pointer'>
        <FaChevronRight onClick={nextSlide} />
      </div>
      
    </div>
  )
}

export default Slider
