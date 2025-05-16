import React from 'react'
import { assets,categories } from '../Assets/images/assets'
import {AppContext} from "../context/AppContext.jsx"
import { useContext } from 'react'

function Categories() {
  const {Navigate} = useContext(AppContext)

  

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium mb-3'>Categories</p>
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 '>
        {categories?.map((item,key) => (
        <div key={key} className={`flex flex-col group justify-center items-center rounded-lg py-5 px-3 gap-2 cursor-pointer`} style={{backgroundColor:item.bgColor}}  onClick={() => {
          Navigate(`/products/${item.path.toLowerCase()}`)
          scrollTo(0,0)
        }} >
          <img src={item.image} alt={item.text} className='group-hover:scale-108 transition max-w-28' />
          <p className='text-sm font-medium'>{item.text}</p>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Categories