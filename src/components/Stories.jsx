import pic1 from '../assets/image/k2.jpg'
import pic2 from '../assets/image/s1.jpg'
import pic3 from '../assets/image/c1.jpeg'

const Stories = () => {
  return (
    <>
       <div className='my-16 text-center  bg-black'>
        <h1 className='text-center text-5xl font-bold text-white pt-8'>Stories</h1>
        <div className='grid md:grid-cols-[60%_40%] gap-8 p-16'>
           <div className='relative'>
           <img src={pic1} alt="" className='md:h-[600px] w-full' />
            <p className='bg-black bg-opacity-50 text-white absolute bottom-0 w-full capitalize p-1 text-md md:p-4 md:text-lg tracking-wide'>
            OUTSTANDING YOUNG PROFESSIONALS AWARD 2023</p>
           </div>
            <div>
            <div className='relative'>
               <img src={pic2} alt="" className='w-full mb-8' />
               <p className='bg-black bg-opacity-50 text-white absolute bottom-0 w-full capitalize p-1 text-md md:p-4 md:text-lg tracking-wide'>
               BEST SKIN CARE PRODUCT AWARD 2024</p>
            </div>
            <div className='relative'>
               <img src={pic3} alt="" className='w-full'/>
               <p className='bg-black bg-opacity-50 text-white absolute bottom-0 w-full p-1 text-md md:p-4 md:text-lg tracking-wide'>
                BEST SELLING PRODUCT COMPANY AWARD 2024</p>
            </div>
            </div>
        </div>
        <button className='w-40 h-12 bg-black text-white text-2xl md:mt-8 
        border border-white mb-8'>View All</button>
       </div>
    </>
  )
}

export default Stories
