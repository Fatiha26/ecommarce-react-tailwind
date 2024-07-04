import { offer } from '../constants/data'
const NewsStories = () => {
  return (
    <>
    <div className='my-16 text-center'>
        <h1 className='text-center text-4xl font-bold'>Latest News & Offers</h1>
        <div className='grid grid-cols-3 gap-8 px-12 py-12'>
           {offer.map((item,index)=>(
            <div className='bg-white shadow shadow-gray-400' key={index}>
                <img src={item.offer} alt="offer" className='h-[250px] w-full' />
                <div className='p-4 text-left'>
                <span className='bg-orange-400 px-4 py-1 text-white text-lg '>Offer</span>
                <p className='text-lg font-bold mt-4'>{item.otext}</p>
                </div>
            </div>
           ))}
        </div>
        <button className='w-40 h-12 bg-black text-white text-2xl mt-8 border-b-2 transition delay-75 border-transparent hover:border-white'>View more</button>
    </div>
    </>
  )
}

export default NewsStories
