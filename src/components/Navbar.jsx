import logo from "../assets/image/logo1.png";
import { data } from '../constants/data';
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div>
      <div>
      <img src={logo} alt="" /><span>Elegance Echo</span>
      </div>
        <div>
        {data.map((item,index)=>(
            <div key={index}>
               <a href={item.link}>{item.text}</a>
            </div>
        ))}
        </div>
      </div>
      <div>
         <CiSearch />
         <CiUser />
         <CiHeart />
         <IoBagOutline /> 
      </div>
    </div>
  )
}

export default Navbar
