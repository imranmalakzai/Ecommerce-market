import { Link } from "react-router-dom"
import Hero from "../components/Hero.jsx"
import { assets } from "../Assets/images/assets.js"
import Categories from "../components/Categories.jsx"
import Bestseller from "../components/Bestseller.jsx"
import BottomBanner from "../components/BottomBanner.jsx"
import NewsLetter from "../components/NewsLetter.jsx"

function Home() {
  return (
    <div className="mt-0 md:mt-10">
      <Hero />     
      <Categories />
      <Bestseller />
      <BottomBanner />
      <NewsLetter />

    </div>
  )
}

export default Home