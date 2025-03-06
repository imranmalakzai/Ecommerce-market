import {headerLogo} from '../assets/images'
import { menu } from '../assets/icons'
import { close } from '../assets/icons'
import { navlinks } from './util'
import { useState } from 'react'
function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <header className='py-8 px-8 absolute w-full z-10 mx-auto'>
      <nav className='flex justify-between items-center max-w-[1280px] mx-auto'>
        <a href="/">
        <img src={headerLogo}  alt='header' width={130} height={130}/>
        </a>
        <ul className='flex  justify-evenly items-center max-md:hidden gap-12'>
          {
            navlinks.map((item)=> (
              <li key={item.label} >
                <a href={item.href} className='font-mono leading-normal text-gray-600 hover:text-orange-500'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='max-md:flex hidden justify-end'>
          <img src={active ? close : menu} alt='menu' className={`${active ? 'bg-red-600 hover:bg-red-400' : 'bg-black hover:bg-gray-800'} cursor-pointer  p-1 w-[50px] h-[40px] rounded-[7px]`}
            onClick={()=>setActive((prev)=>!prev)}
          />
          <div className={`${active ? "block" : "hidden"} sidebar absolute top-20 bg-[rgba(0,0,0,0.1)] rounded-xl`}>
            <ul className='items-center max-md:flex hidden flex-col py-6 px-8 gap-4'>
            {
              navlinks.map((item)=> (
                <li key={item.label} >
                  <a href={item.href} className='font-mono leading-normal text-gray-500 hover:text-orange-500'>
                    {item.label}
                  </a>
                </li>
              ))
            }
          </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar