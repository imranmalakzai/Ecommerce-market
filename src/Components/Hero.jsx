import Button from "./util/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "./util"
import { bigShoe1, bigShoe3 } from "../assets/images"
import { bigShoes } from "./util"
import { useState } from "react"
import ShoeCard from "./util/ShoeCard"
function Hero() {
  const [bigShoe,setBigShoe] = useState(bigShoe1);
  const changeBigShoeImage = (value) => {
    setBigShoe(value)
  }

  return (
   <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10 p-2">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
    <p className="text-red-400 font-mono text-xl">Our Summer collections</p>
    <h1 className="mt-10 font-mono text-8xl max-sm:text-7xl max-sm:leading-[82px] font-bold">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
      <br />
      <span className="inline-block mt-3 text-red-400">Nike</span> Shoes
    </h1>
    <p className="font-mono text-gray-600 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
    <Button label="Shope now" iconUrl={arrowRight} />
    <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16 border-gray-600   ">
      {
        statistics.map((Item) => (
          <div key={Item.label}>
              <p className="font-bold font-sans sm:text-4xl text-2xl">{Item.value}</p>
              <p className="leading-7 text-gray-700 font-semibold">{Item.label}</p>
          </div>
        ))
      }
    </div>  
    </div>

    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-color  bg-cover bg-image">
      <img src={bigShoe}  className="object-contain relative z-10 w-[610px] h-[500px]" alt="shoes1"/>
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]">
       {
        bigShoes.map((Item,index) => (
          <div key={index} className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 pr-12">
          <ShoeCard imgURL={Item.name}
            changeBigShoeImage= {()=>changeBigShoeImage(Item.name)}
            bigShoeImage={bigShoe}
          />
          </div>
        ))
       }
      </div>
    </div>
   </section>
  )
}

export default Hero