import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { useParams } from 'react-router-dom'
import { categories } from '../Assets/images/assets.js'
import ProductCard from '../components/ProductCard.jsx'

function ProductCategory() {
  const {products} = useContext(AppContext)
  const {category} = useParams()
  
  const searchCategory = categories.find((item) => item.path.toLowerCase() === category)

  const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)

  return (
    <div className='mt-16'>
      {searchCategory && 
      (
        
        <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
          <div className='w-16 h-0.5 rounded-full bg-primary'></div>
        </div>
      )
      }
      
      {filteredProducts?.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {filteredProducts.map((product,key) => {
            return <ProductCard key={key} product={product} />
          })}
        </div>
      )
      :
      (
        <div className='flex items-center justify-center h-[60vh]'>
          <p onmouse className='text-2xl font-medium text-primary'>text-2xl font-medium text-primary</p>
        </div>
      )
    }
    </div>
  )
}

export default ProductCategory