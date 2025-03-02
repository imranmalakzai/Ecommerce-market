import React from 'react'
import { logo } from '../assets'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import Info from './Info'

const Footer = () => (
  <>
  <footer className='flex max-md:flex-col flex-row mt-10 py-10 gap-10'>
    <div className='text-white flex flex-col gap-5'>
       <img src={logo} alt="logo" width={200} height={200} />
       <p className='max-w-80 text-gray-300'>A new way to make the payments easy, reliable and secure.</p>
    </div>
    <div className='flex text-white justify-between flex-1 max-w-[90%] flex-wrap'>
      {footerLinks.map((footerLink,index)=>(
        <div key={index}>
          <h4 className='font-bold'>{footerLink.title}</h4>
          <ul>
          {footerLink.links.map((footer,index)=>(
            <li key={index} className='text-gray-300 hover:text-cyan-400'>
              <a href={footer.link}>
                {footer.name}
              </a>
            </li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
  <Info />
  
  </>
)

export default Footer