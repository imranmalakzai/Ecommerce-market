import React, { useContext } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import { AppContext } from './context/AppContext.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import AddAddress from './pages/AddAddress.jsx'
import MyOrders from './pages/MyOrders.jsx'
import SellerLogin from './components/seller/SellerLogin.jsx'
import SellerLayout from './pages/Seller/SellerLayout.jsx'
import AddProduct from './pages/Seller/AddProduct.jsx'
import ProductList from './pages/Seller/ProductList.jsx'
import Order from "./pages/Seller/Order.jsx"



function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const {showUserLogin,isSeller} = useContext(AppContext)
  return (
   <div className='text-default min-h-screen text-gray-700 bg-white'>
      {!isSellerPath &&  <Navbar />}
      {showUserLogin && <Login />}
     <div className={`${isSellerPath ? "" : "px:6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:category' element={<ProductCategory />} />
        <Route path='/product/:category/:id' element={<ProductDetails />} />
        <Route path='/add-address' element={<AddAddress />} />
        <Route path='/my-orders' element={<MyOrders />} />
        <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
        <Route  index element={isSeller && <AddProduct />} />
        <Route path='product-list' element={<ProductList />} />
        <Route path='order' element={<Order />} />

        
        </Route>
      </Routes>
      {!isSellerPath &&  <Footer />}
     </div>
   </div>
  )
}

export default App