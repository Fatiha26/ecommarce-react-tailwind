import { about } from '../constants/data'

const About = () => {
  return (
    <>
      <div className='grid md:grid-cols-4 grid-cols-2'>
      {
        about.map((item,index)=>(
            <div key={index} style={{ 
               backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), 
                          rgba(0, 0, 0, 0.5)), url(${item.src})`
                  }} className='w-full bg-no-repeat bg-cover bg-center h-[250px] md:h-[400px] relative'>
               <div className='flex justify-center items-center flex-col pt-28 md:pt-44'>
               <h1 className='text-xl tracking-wider text-white font-bold'>{item.text}</h1>
            </div>
                {/* <div className='absolute text-center py-20 top-0  left-0 text-white 
                text-2xl flex flex-col gap-5 bg-opacity-50 bg-black w-full h-[332px]'>
                   <a href="#">{item.data}</a>
                </div> */}
         </div>
        ))
      }
      </div>
    
      
    </>
  )
}

export default About
