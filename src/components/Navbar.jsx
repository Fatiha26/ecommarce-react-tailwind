import logo from "../assets/image/logo1.png";
import { data } from '../constants/data';
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (

    
    <div className="md:flex justify-between items-center py-2">
      <div className="grid md:grid-cols-2 items-center ">
      <div className="flex md:flex-col items-center justify-center">
      <img src={logo} alt="logo" className="w-20 md:w-12" />
      <span className="text-xl md:text-md font-bold text-pink-500">Elegance Echo</span>
      </div>
        <div className="flex gap-12">
        {data.map((item,index)=>(
            <div key={index} >
               <a href={item.link} className="text-lg text-white font-bold px-3 py-2 border border-transparent
                hover:border-white cursor-pointer transition delay-75">{item.text}</a>
            </div>
        ))}
        </div>
      </div>

      <div className="flex gap-5 ml-24 md:mr-16">
         <CiSearch className="text-2xl text-white hover:text-pink-400 hover:-mt-1 transition delay-75 cursor-pointer" />
         <CiUser className="text-2xl text-white hover:text-pink-400 hover:-mt-1 transition delay-75 cursor-pointer"/>
         <CiHeart className="text-2xl text-white hover:text-pink-400 hover:-mt-1 transition delay-75 cursor-pointer"/>
         <IoBagOutline className="text-2xl text-white hover:text-pink-400 hover:-mt-1 transition delay-75 cursor-pointer"/> 
      </div>
    </div>
  )
}

export default Navbar
