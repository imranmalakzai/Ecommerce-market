import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext";
import {dummyOrders} from "../Assets/images/assets.js"

function MyOrders() {
  const [myOrders,setMyOrders] = useState([]);
  const {currency} = useContext(AppContext);

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders)
  }

  useEffect(() => {
    fetchMyOrders();
  },[])


  return (
    <div className="mt-16 pb-16 min-h-svh">
      <div className="flex flex-col w-max items-end mb-4">
        <p className="text-2xl font-medium uppercase">My orders</p>
        <div className="w-16 h-0.5 rounded-full bg-primary"></div>
      </div>
      {
        myOrders.map((order,index) => {
          return (
             <div key={index} className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl ">
                <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
                  <span>OrderId : {order._id}</span>
                  <span>Payment : {order.paymentType}</span>
                  <span>Total Amount : {currency}{order.amount}</span>
                </p>
                {
                  order.items.map((item,index)=> {
                    return (
                      <div className={`relative bg-white text-gray-500 ${order.items.length !== index +1 && "border-b"  }border flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>

                        <div className="flex items-center mb-4 md:mb-0 ">
                          <div className="rounded-lg bg-primary/10 p-4 group">
                            <img src={item.product.image[0]} alt="productImage" className="w-16 h-16 group-hover:scale-105 cursor-pointer transition" />
                          </div>
                          <div className="ml-4">
                            <h2 className="text-xl text-gray-800 font-medium">{item.product.name}</h2>
                            <p>category: {item.product.category}</p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                          <p>Quantity : {item.quantity || "1"}</p>
                          <p>status : {order.status}</p>
                          <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>

                        <p className="text-lg text-primary font-medium">Amount : ${item.product.offerPrice * item.quantity}</p>
                      </div>
                    )
                  })
                }
             </div>
          )
         
        })
      }
    </div>
  )
}

export default MyOrders