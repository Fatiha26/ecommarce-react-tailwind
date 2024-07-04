import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { newItem } from '../constants/data'


const New = () => {
  return (
    <>
    <div className='flex items-center justify-center flex-col h-screen'>
     <Swiper
      breakpoints={{
        340:{
            slidesPerView:2,
            spaceBetween: 15
        },
        700:{
            slidesPerView:3,
            spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable:true
      }}
      modules={[FreeMode,Pagination]}
      className='max-w-[90%] lg:max-w-[80%]'
      >
      {newItem.map((item,index)=>(
        <SwiperSlide key={index}>
        <div className='flex flex-col gap-6 group relative shadow-lg to-white rounded-xl px-6 py-8 h-[250px]
        w-[215px] lg:h-[400px] lg:w-[350px]'>

        </div>

        </SwiperSlide>

      ))}

     </Swiper>

    </div>

    </>
  )
}

export default New
