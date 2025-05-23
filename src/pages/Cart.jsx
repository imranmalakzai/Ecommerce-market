import { useEffect, useState } from 'react';
import { useContext } from 'react'
import {AppContext} from "../context/AppContext.jsx"
import {assets, dummyAddress} from "../Assets/images/assets.js"

function Cart() {
    const { Navigate,
        products,setProducts,
        cardItems,
        removeCartItem,
        updateCartItem,
        getCardAmount,
        getCardCount} = useContext(AppContext);
        
        const [showAddress, setShowAddress] = useState(false);
        const [address,setAddress] = useState(dummyAddress)
        const [cartArray,setCartArray] = useState([])
        const [selectedAddress,setSelectedAddress] = useState(dummyAddress[0])
        const [paymentOption,setPaymentOption] = useState("COD")
        


    const getCart = () => {
        let tempArray = []
        for (const key in cardItems){
            const product = products.find((item) => (item._id === key))
            product.quantity = cardItems[key]
            tempArray.push(product)
        }
        setCartArray(tempArray)
    }


    useEffect(()=> {
        if (products.length && cardItems){
            getCart()
        }
    },[products,cardItems])
    

    const placeOrder = async () => {
        //**After Backend section */
    }
        
    return (
        <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
            <div className='flex-1 max-w-4xl'>
                <h1 className="text-3xl font-medium mb-6">
                    Shopping Cart <span className="text-sm text-primary">{getCardCount()} Items</span>
                </h1>

                <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartArray.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div onClick={()=>Navigate(`product/${product.category.toLowerCase()}/${product._id}`)} className="group cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded">
                                <img className="max-w-full h-full object-cover group-hover:scale-103 transition" src={product.image[0]} alt={product.name} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                
                                    <p>price: <span>${ product.offerPrice || "N/A"}</span></p>
                                    <div className='flex items-center'>
                                        <p>Qty:</p>
                                        <select className='outline-none' name="itemCount" onChange={(e) => updateCartItem(product._id,e.target.value)} value={cardItems[product._id]}>
                                            {Array(cardItems[product._id] > 9 ?  cardItems[product._id] : 9 ).fill('').map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center">${product.offerPrice * product.quantity}</p>
                        <button className="cursor-pointer mx-auto">
                           <img src={assets.remove_icon} alt="cancel" className="w-6 h-6" onClick={()=> removeCartItem(product._id)} />
                        </button>
                    </div>)
                )}

                <button onClick={() => Navigate("/products")} className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium">
                    <img src={assets.arrow_right_icon_colored} alt="arrow" className='group-hover:translate-x-1.5 transition' />
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
                <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
                <hr className="border-gray-300 my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500">{selectedAddress ? `${selectedAddress.city},${selectedAddress.country}` : "Address Not found"} </p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-primary hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                               {address.map((address,key) => (
                                 <p key={key} onClick={() => {
                                    setSelectedAddress(address);
                                    setShowAddress(false);
                                 }} className="text-gray-500 p-2 hover:bg-gray-100">
                                    {address.city},{address.country}
                                 </p>
                               ))}
                                <p onClick={() => {
                                    Navigate("/add-address")
                                    setShowAddress(false)
                                }} className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select onChange={(e) => setPaymentOption(e.target.value)} className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between">
                        <span>Price</span><span>${getCardAmount()}</span>
                        
                    </p>
                    <p className="flex justify-between">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between">
                        <span>Tax (2%)</span><span>${getCardAmount() * 2 / 100}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3">
                        <span>Total Amount:</span><span>${getCardAmount() + getCardAmount() * 2 / 100}</span>
                    </p>
                </div>

                <button onClick={placeOrder} className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium hover:bg-primary transition">
                    {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
                </button>
            </div>
        </div>
    )
}

export default Cart