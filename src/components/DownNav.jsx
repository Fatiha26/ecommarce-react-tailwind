import { downNav } from '../constants/data';

const DownNav = () => {
  return (
    <nav className='fixed bottom-0 z-10 bg-white w-full'>
      <ul className='flex flex-row gap-4 md:gap-0 pl-11 md:pl-0 py-2 md:py-0  md:justify-evenly items-center'>
        {downNav.map((link, index) => (
          <li key={index} className='md:py-4 border-t-4 transition delay-75 border-transparent hover:border-pink-500'>
            <a href="#" className='md:text-2xl'>{link.feature}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DownNav;
