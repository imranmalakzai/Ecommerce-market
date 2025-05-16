import React from 'react'
import {assets,features} from "../Assets/images/assets.js"
function BottomBanner() {
  return (
    <div className='relative mt-24'>
      <img src={assets.bottom_banner_image} alt="bottom_banner_image" className='hidden md:block w-full' />
      <img src={assets.bottom_banner_image_sm} alt="bottom_banner_image" className='block md:hidden' />
      <div className='absolute flex flex-col inset-0 items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold text-primary cursive mb-6'>Why we are the best ? </h1>
          {features?.map((feature,key) => (
            <div key={key} className='flex flex-row items-center gap-4 mt-2'>
              <img src={feature.icon} alt={feature.title} className='w-9 md:w-11 rounded-full' />
             <div>
             <h3 className='text-xl md:text-2xl cursive'>{feature.title}</h3>
             <p>{feature.description}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner