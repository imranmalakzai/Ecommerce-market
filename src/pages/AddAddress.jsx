
import { useState } from "react"
import { assets } from "../Assets/images/assets.js"


//**Input Fields */
export const InputField = ({type,placeholder,name,handleChange,address}) => {
  return <input className="w-full px-2 py-2.5 border border-500/30 rounded outline-none text-gray-500 focus:border-primary transition   "
   type={type} placeholder={placeholder} onChange={handleChange} name={name} value={address[name]} required />
}
function AddAddress() {

  const [address,setAddress] = useState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:"",
  })

const onSubmitHandler = async(e) => {
  e.preventDefault();
}

const handleChange = async(e) => {
  const {name,value} = e.target
  setAddress((preAddress) => ({
    ...preAddress,
    [name]:value
  }))
  console.log(address);
}
  return (
    <div className="mt-16 pb-16 max-md:px-10">
      <p className="text-2xl md:text-3xl text-gray-500">Add Shipping 
        <span className="font-semibold text-primary">Address</span>
         </p>
         <div className="flex flex-col-reverse mt-10 md:flex-row justify-between">
            <div>
              <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
                  {/* - - - - - - -  First name and last name - - - - - - -  */}
                <div className="grid grid-cols-2 gap-4">
                  <InputField handleChange={handleChange} type="text" name="firstName" placeholder="First Name" address={address}/>
                  <InputField handleChange={handleChange} type="text" name="lastName" placeholder="Last Name" address={address}/>
                </div>
                  {/* - -  - - - - - - - - - Email Address And Street- - - - - - - - - - - - - - -  */}
                      <InputField handleChange={handleChange} type="text" name="email" placeholder="Email Address" address={address}/>
                      <InputField handleChange={handleChange} type="text" name="street" placeholder="Street" address={address}/>
                  {/* - -  - - - - - - - - -  City and State - - - - - - - - - - - - - - -  */}
                   <div className="grid grid-cols-2 gap-4">
                      <InputField handleChange={handleChange} type="text" name="city" placeholder="city" address={address}/>
                      <InputField handleChange={handleChange} type="text" name="state" placeholder="State" address={address}/>
                  </div>
                  {/* - -  - - - - - - - - - Country And Zip Code- - - - - - - - - - - - - - -  */}
                   <div className="grid grid-cols-2 gap-4">
                      <InputField handleChange={handleChange} type="number" name="zipcode" placeholder="zip code" address={address}/>
                      <InputField handleChange={handleChange} type="text" name="country" placeholder="country" address={address}/>
                  </div>
                      <InputField handleChange={handleChange} type="text" name="phone" placeholder="phone" address={address}/>  
                      <button className="w-full mt-6 border py-3 text-white hover:bg-primary-dull bg-primary transition cursor-pointer uppercase">save address</button>
              </form>
            </div>
            <img src={assets.add_address_iamge} alt="mapImage" className="md:mr-16 mb-16 md:mt-0" />
         </div>
    </div>
  )
}

export default AddAddress