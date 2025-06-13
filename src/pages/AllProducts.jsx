import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { assets } from '../Assets/images/assets.js'
import ProductCard from '../components/ProductCard.jsx'

function AllProducts() {
  const  {products,searchQuery,setSearchQuery} = useContext(AppContext)
  const [filterProducts,setFilterProducts] = useState([])
  

  //**Fetch filtered Data */
  useEffect(()=>{
    
    if(searchQuery.length > 0){
      setFilterProducts(products.filter(
        product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ))
    }
    else{
      setFilterProducts(products)

    }
  },[products,searchQuery])

  
  return (
    <div className='flex flex-col mt-16 min-h-screen'>
      <div className='flex flex-col w-max items-end'>
        <p className='text-2xl font-medium uppercase'>All Products</p>
        <div className='w-16 h-0.5 rounded-full  bg-primary'></div>
      </div>
        {/* #product list */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 '>
        {filterProducts.filter((product) => product.inStock).map((product,key)=> {
        return  <ProductCard key={key} product={product} />
        })}
      </div>
    </div>
  )
}

export default AllProducts