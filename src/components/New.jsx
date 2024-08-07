import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { newItem } from '../constants/data';
import { IoIosAddCircleOutline } from "react-icons/io";

const New = () => {
  return (
    <>
      <div className='my-12'>
      <h1 className='text-center text-5xl mb-4 font-bold'>What&apos;s new</h1>
      <div className='flex items-center justify-center flex-col md:h-screen relative'>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className='max-w-[90%] lg:max-w-[80%]'
        >
          {newItem.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col gap-6 group relative shadow-lg to-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{ backgroundImage: `url(${item.src})` }}>
                    <div className='absolute bottom-3 left-3'>
                      <IoIosAddCircleOutline className='text-5xl text-black' />
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-button-prev absolute z-10 top-50 cursor-pointer'></div>
        <div className='swiper-button-next absolute z-10 top-50 cursor-pointer'></div>
      </div>
      </div>
    </>
  );
};

export default New;
