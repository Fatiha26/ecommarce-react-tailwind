import React, { useState, useEffect } from 'react';
import { sliders } from '../constants/data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Navbar from './Navbar';

const Slider = () => {
  const [curImg, setCurImg] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = curImg === 0;
    const newIndex = isFirstIndex ? sliders.length - 1 : curImg - 1;
    setCurImg(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = curImg === sliders.length - 1;
    const newIndex = isLastIndex ? 0 : curImg + 1;
    setCurImg(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [curImg]);

  return (
    <div className='h-[550px] w-full m-auto relative group'>
      <div
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)),url(${sliders[curImg].src})` }}
        className='w-full h-full bg-top bg-cover duration-500'
      >
        <Navbar />
        <div className='flex justify-center items-center flex-col pt-36'>
      <h1 className='md:text-5xl text-3xl text-white font-bold hover:tracking-wider cursor-pointer transition delay-75'>
          Welcome to <span className="md:text-5xl text-3xl font-bold text-pink-500">Elegance Echo</span></h1>
      <button className='w-40 h-12 bg-black text-white text-2xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
      </div>
      </div>

      <div
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full 
      p-2 bg-black/20 text-white cursor-pointer'
      >
        <FaChevronLeft onClick={prevSlide} />
      </div>

      <div
        className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full 
      p-2 bg-black/20 text-white cursor-pointer'
      >
        <FaChevronRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
