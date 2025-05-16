import ProductCard from "./ProductCard"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
function Bestseller() {
  const {products} =useContext(AppContext)

  return (
    <div className="mt-16">
      <p className="font-medium text-2xl md:text-3xl mb-2">Best Sellers</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  ">
        {
          products?.filter(product => product.inStock).slice(0,5).map((item,key) => {
            return  <ProductCard key={key} product={item} />
          })
        }
      </div>
    </div>
  )
}

export default Bestseller