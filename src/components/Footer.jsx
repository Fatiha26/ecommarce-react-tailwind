import apple from '../assets/image/apple.png'
import google from '../assets/image/google.png'
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
         <div>
            <p>&copy; Lamia Fatiha 2024. All rights reserved.</p>
         </div>
         <div>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn  />
         </div>
         <div>
           <img src={google} alt="" />
           <img src={apple} alt="" />
         </div>

      </footer>
    </>
  )
}

export default Footer
