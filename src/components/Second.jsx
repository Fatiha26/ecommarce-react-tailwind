import shop from '../assets/image/shop.jpg'

const Second = () => {
  return (
    <div className='w-full md:h-[580px] bg-center bg-cover' 
     style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)), url(${shop})`
      }}>

      <div className='flex justify-center items-center flex-col md:pt-64 py-28 md:py-0'>
      <h1 className='text-3xl md:text-5xl text-white font-bold'>Women&apos;s Collection </h1>
      <button className='w-40 h-12 bg-black text-white text-2xl mt-4 border-b-2 transition delay-75 border-transparent hover:border-white'>Shop Now</button>
      </div>
    </div>
    
    
  )
}

export default Second
