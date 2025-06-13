import React, { useContext, useState } from 'react'
import { assets } from '../../Assets/images/assets';
import { AppContext } from '../../context/AppContext';
import { Link, NavLink, Outlet } from 'react-router-dom';

function SellerLayout() {
  const {isSeller,setIsSeller} = useContext(AppContext)
   
    const sidebarLinks = [
        { name: "Add product", path: "/seller", icon: assets.add_icon},
        { name: "product list", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "orders", path: "/seller/order", icon: assets.order_icon },
    ];

    const logout = async () => {
      setIsSeller(false)
    }

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <Link to="/">
                    <img className="w-34 md:w-38" src={assets.logo} alt="MarketLogo" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='bg-primary hover:bg-primary-dull cursor-pointer text-white border rounded-full text-sm px-6 py-2'>Logout</button>
                </div>
            </div>
            <div className='flex'>
              <div className="md:w-64 w-16 border-r min-h-max text-base border-gray-300 pt-4 flex flex-col ">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end = {item.path === "/seller"}
                        className={({isActive}) => `flex items-center py-3 px-4 gap-3  
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                : "hover:bg-gray-100/90 border-white text-gray-700"
                            }`
                        }
                    >
                        <img src={item.icon} alt="item_icons" />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
            <Outlet />
            </div>
        </>
    );
}

export default SellerLayout