import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {dummyProducts} from "../Assets/images/assets.js"
import toast from "react-hot-toast";



export const AppContext = createContext()

const ContextProvider = (props) => {

  const [products,setProducts] = useState([])
  const [isSeller,setIsSeller] = useState(false)
  const [user,setUser] = useState(false)
  const [showUserLogin,setShowUserLogin] = useState(false)
  const [cardItems,setCardItems] = useState({})  
  const [searchQuery,setSearchQuery] = useState({})
  
  

  //**Fetch all the products */
  const fetchProducts =  () => {
    setProducts(dummyProducts)
  }

  //**Add Product to the Card */
  const addToCard = (itemId) => {
    let CardData = structuredClone(cardItems)
    if (CardData[itemId]){
      CardData[itemId] +=1
    }else{
      CardData[itemId] = 1
    }
    setCardItems(CardData)
    toast.success("Added to the cart")
  }

  //**update Cart Item Quantity */
  const updateCartItem = (itemId,quantity) => {
    let CardData = structuredClone(cardItems)
    CardData[itemId] = Number(quantity);
    setCardItems(CardData)
    toast.success("Cart Updated")
  }

 //**Remove from the cart */
 const removeCartItem = (itemId) => {
    let CardData = structuredClone(cardItems)
    if (CardData[itemId]){
      CardData[itemId] -= 1
      if (CardData[itemId] === 0) {
        delete CardData[itemId]    
      }
    }
    setCardItems(CardData)
    toast.success("remove from cart")
    
 }


  const Navigate = useNavigate()


  useEffect(()=>{
   fetchProducts()
  },[])

  const currency = import.meta.env.VITE_CURRENCY

    //**Get Cart Items count*/
    const getCardCount = () => {
      let totalCount = 0 
      for (const item in cardItems){
          totalCount += cardItems[item]
      }
      return totalCount
    }


    //**get cart total Amount */
  const getCardAmount = () => {
    let totalAmount = 0

    for (let items in cardItems){

      let itemInfo = products.find((product) => product._id === items);
      if (cardItems[items] > 0){
        totalAmount += itemInfo.offerPrice * cardItems[items]
      }
    }
    return Math.floor(totalAmount * 100) / 100
  }


  const values = {
    user,setUser,
    isSeller,setIsSeller,
    showUserLogin,setShowUserLogin,
    Navigate,
    products,setProducts,
    fetchProducts,
    currency,
    addToCard,
    updateCartItem,
    cardItems,
    removeCartItem,
    searchQuery,setSearchQuery,
    getCardAmount,
    getCardCount
  }
  return(
    <AppContext.Provider value={values}>
      {props.children}
    </AppContext.Provider>
  )
}


export default ContextProvider