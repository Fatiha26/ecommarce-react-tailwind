import { FaRegEnvelopeOpen } from "react-icons/fa6";
const StayTuned = () => {
  return (
    <>
     <div>
        <div>
          <div>
           <FaRegEnvelopeOpen />
           <h4>STAY TUNED</h4>
          </div>
          <p>Don’t miss the opportunity to get daily updates on all that’s new at Elegance Echo</p>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Enter Email Address" />
            <input type="text" placeholder="Enter Mobile Number" />
            <button>Subscribe</button>
          </div>
          <div>
            <input type="radio" placeholder="I live in Bangladesh" />
            <input type="radio" placeholder="I live outside of Bangladesh" />
          </div>
        </div>
     </div>
      
    </>
  )
}

export default StayTuned
