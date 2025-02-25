import {logo,close,menu} from '../assets'
import { useState } from 'react';
import {navLinks} from '../constants/index'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex justify-between items-center py-6'>
      <img src={logo} alt='hoobank' className='h-8 w-32' />
      <ul className='sm:flex hidden  flex-1 justify-between max-w-[20rem] text-white items-center list-none non'>
        {navLinks.map((nav)=>(
          <li className='font-normal hover:text-blue-600 z-100' key={nav.id}>
            <a href={`#${nav.title}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt='menu' className='w-6 h-6 cursor-pointer text-3xl' onClick={()=>setToggle(prev =>!prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} absolute right-4 top-20`}>
        <ul className='text-white sm:hidden  flex flex-col items-center list-none min-h-[200px] sidebar bg-gradient-to-tl from-black to-gray-500 rounded-xl min-w-[10rem] justify-center gap-4 non z-40'>
          {navLinks.map((nav)=>(
            <li className='font-normal hover:text-blue-600' key={nav.id}>
              <a href={`#${nav.title}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
          </div>
      </div>
    </nav>
  )
} 
 
export default Navbar