import { assets } from "../Assets/images/assets"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="relative">
      <img src={assets.main_banner_bg} alt="Hero" className="hidden md:block w-full" />
      <img src={assets.main_banner_bg_sm} alt="Hero" className="md:hidden w-full" />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-50 md:pb-0 md:pl-10 lg:pl-10">
        <h1 className="text-3x md:text-4xl lg:text-5xl max-w-72 md:max-w-80  lg:max-w-105 leading-tight font-bold cursive">Freshness You Can Trust, Saving You Will Love!</h1>
     
      <div className="flex items-center mt-6 font-medium gap-2">
        <Link to="/products" className="group flex item-center gap-2 px-7 md:px-9  bg-primary hover:bg-primary-dull transition rounded cursor-pointer py-2 text-white">
           <button>Shop Now</button>
           <img className="md:hidden transition group-focus:translate-x-1" src={assets.white_arrow_icon} alt="arrow" />
        </Link>

        <Link to="/products" className="group hidden md:flex items-center gap-2 px-9 py-2 cursor-pointer text-white bg-red ">
           <button>Explore deals</button>
           <img className="md:hidden transition group-focus:translate-x-1" src={assets.black_arrow_icon} alt="arrow" />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Hero