import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navlinks } from './util'
function Navbar() {
  return (
    <header className='py-8 px-8 absolute w-full z-10'>
      <nav className='flex justify-between items-center max-w-[1440px]'>
        <a href="/">
        <img src={headerLogo}  alt='header' width={130} height={130}/>
        </a>
        <ul className='flex-1 flex justify-evenly items-center max-lg:hidden'>
          {
            navlinks.map((item)=> (
              <li key={item.label}>
                <a href={item.href} className='font-mono leading-normal text-gray-600'>
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='menu' width={34} height={34} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar