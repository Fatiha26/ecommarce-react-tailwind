import apple from '../assets/image/apple.png'
import google from '../assets/image/google.png'
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='flex justify-between px-12 items-center bg-black py-4'>
         <div>
            <p className='text-lg text-white'>&copy; Lamia Fatiha 2024. All rights reserved.</p>
         </div>
         <div className='flex gap-4 text-2xl text-white'>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn  />
         </div>
         <div className='w-20 h-8 flex gap-4 mr-24'>
           <img src={google} alt="" />
           <img src={apple} alt="" />
         </div>

      </footer>
    </>
  )
}

export default Footer
