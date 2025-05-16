import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";
import { assets } from "../Assets/images/assets";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const {products,Navigate,currency,addToCard} = useContext(AppContext)
  const {id} = useParams()

const [thumbnail, setThumbnail] = useState(null)
const [relatedProducts, setRelatedProducts] = useState([]);

const product = products?.find((product) => product._id === id)



//**Fetch Related products */
useEffect(() => {
  if(products.length > 0){
    let productCopy = products.slice();
    const filter =  productCopy.filter((item) =>(item.category === product.category))
    setRelatedProducts(filter.slice(0,5))
  }
},[product]);




//**Fetch the single product */
useEffect(() => {
  setThumbnail(product?.image[0] ? product.image[0] : null)
},[product])

return product && (
    <div className="mt-16">
        <p>
            <Link to={"/"}>Home</Link> /
            <Link to={"/products"}> Products</Link> /
            <Link to={`/products/${product?.category.toLowerCase()}`}> {product.category}</Link> /
            <span className="text-primary cursor-pointer"> {product.name}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                    {product.image.map((image, index) => (
                        <div key={index} onClick={() => setThumbnail(image)} className="border group max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                            <img src={image} alt={`Thumbnail ${index + 1}`} className="group-hover:scale-105 transition" />
                        </div>
                    ))}
                </div>

                <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                    <img src={thumbnail} alt="Selected product" className="hover:scale-105 cursor-pointer transition" />
                </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
                <h1 className="text-3xl font-medium">{product.name}</h1>

                <div className="flex items-center gap-0.5 mt-1">
                    {Array(5).fill('').map((_, i) => (
                            <img key={i} src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="w-3.4 md:w-4" />
                    ))}
                    <p className="text-base ml-2">(4)</p>
                </div>

                <div className="mt-6">
                    <p className="text-gray-500/70 line-through">MRP: ${product.price}</p>
                    <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
                    <span className="text-gray-500/70">(inclusive of all taxes)</span>
                </div>

                <p className="text-base font-medium mt-6">About Product</p>
                <ul className="list-disc ml-4 text-gray-500/70">
                    {product.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>

                <div className="flex items-center mt-10 gap-4 text-base">
                    <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition" onClick={()=>addToCard(product._id)} >
                        Add to Cart
                    </button>
                    <button onClick={()=>{
                      addToCard(product._id)
                      Navigate("/cart")
                    }} className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white hover:bg-primary-dull transition" >
                        Buy now
                    </button>
                </div>
            </div>
        </div>
        {/* - - - - - Related products - - - - - - - -  */ }
        <div className="mt-16 flex flex-col items-center">
          <div className="flex flex-col items-center w-max">
            <p className="text-2xl">Related Products</p>
            <div className="w-25 h-0.5 rounded bg-primary"></div>
          </div>
                    {/* Related products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {relatedProducts?.filter((product) => product.inStock).map((product,key) => (
                    <ProductCard key={key} product={product}/>
                  ))}
          </div>
          <button className="mx-auto cursor-pointer px-12 my-16 py-2.5 border rounded text-primary hover:bg-primary/10 transition" onClick={()=>{Navigate("/products");scrollTo(0,0)}}>See more</button>
        </div>
    </div>
);
}

export default ProductDetails