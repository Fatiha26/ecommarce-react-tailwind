import apple from '../assets/image/apple.png'
import google from '../assets/image/google.png'
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='md:flex justify-between px-8 md:px-12 items-center bg-black py-4'>
         <div>
            <p className='text-lg text-white'>&copy; Lamia Fatiha 2024. All rights reserved.</p>
         </div>
         <div className='flex md:gap-4 gap-12 md:ml-0 ml-14 text-2xl text-white my-2 md:my-0'>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn  />
         </div>
         <div className='w-20 h-8 flex gap-4 md:mr-24 ml-12 md:ml-0'>
           <img src={google} alt="" />
           <img src={apple} alt="" className='h-6 mt-1'/>
         </div>

      </footer>
    </>
  )
}

export default Footer
