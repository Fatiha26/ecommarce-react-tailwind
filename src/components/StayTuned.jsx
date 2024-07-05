import { FaRegEnvelopeOpen } from "react-icons/fa6";
const StayTuned = () => {
  return (
    <>
     <div className="md:flex justify-center items-center my-12 gap-20">
        <div  className="pl-12 md:pl-20">
          <div className="flex items-center text-3xl">
           <FaRegEnvelopeOpen />
           <h4 className="ml-4">STAY TUNED</h4>
          </div>
          <p className="text-lg w-80 text-gray-500 leading-6 mt-4">Don’t miss the opportunity to get daily<br/>
          updates on all that’s new at Elegance Echo</p>
        </div>
        <div>
          <div className="w-full grid md:grid-cols-3 gap-4 ml-12 md:ml-0 md:mt-0 mt-4">
            <input type="text" placeholder="Enter Email Address" className="border border-gray-300 h-12 w-[250px] pl-4" />
            <input type="text" placeholder="Enter Mobile Number" className="border border-gray-300 h-12 w-[250px] pl-4"  />
            <button className='w-32 h-12 bg-black text-white text-2xl border-b-2 transition delay-75 border-transparent hover:border-white'>
            Subscribe</button>
            </div>
          <div className="mt-4 text-sm pl-6 md:pl-0 md:text-xl text-gray-400">
            <input type="radio" /><label className="ml-1 md:mr-12 mr-2">I live in Bangladesh</label>
            <input type="radio" /><label className="ml-1">I live outside of Bangladesh</label>
          </div>
        </div>
     </div>
      
    </>
  )
}

export default StayTuned
