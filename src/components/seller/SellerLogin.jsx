import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

function SellerLogin() {
  const {isSeller,setIsSeller,Navigate} = useContext(AppContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  console.log(isSeller);

  useEffect(()=> {
    if(isSeller){
      Navigate("/seller");
      setIsSeller(true)
    }
  },[isSeller])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSeller(true);
  }
  return !isSeller &&(
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
      <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200c'>
        <p className='text-2xl font-medium m-auto'>
          <span className='text-primary'>Seller </span>
          Login
        </p>
        <div className='w-full'>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"  placeholder="Enter your email" required id='email' autoComplete='username'/>
          </div>
          <div>
             <label htmlFor="password">password</label>
             <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" autoComplete='current-password' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' placeholder='Enter your password' required  id='password'/>
          </div>
        </div>
          <button className='bg-primary text-white w-full py-2 rounded-md cursor-pointer'>
            Login
          </button>
      </div>
    </form>
  )
}

export default SellerLogin