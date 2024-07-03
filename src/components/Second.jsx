import shop from '../assets/image/shop.jpg'

const Second = () => {
  return (
    <div className='w-full h-[580px] bg-center bg-cover' 
     style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), 
                          rgba(0, 0, 0, 0.3)), url(${shop})`
      }}>

      <div className='flex justify-center items-center flex-col pt-44'>
      <h1 className='text-5xl text-white font-bold'>Women's Collection </h1>
      <button className='w-40 h-12 bg-black text-white text-2xl mt-4'>Shop Now</button>
      </div>
    </div>
    
    
  )
}

export default Second
