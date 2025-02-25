import styles from "../style"
import GetStarted from "./GetStarted"
import {robot,discount} from '../assets'
import {AiFillPrinter} from 'react-icons/ai'
const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col gap-5 text-white ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col x:px-0 sm:px-16 px-6`}>
        <div className="flex cover justify-center items-center flex-row py-2 px-4 mb-12 rounded-xl">
          <img src={discount} alt="discount" />
          <p className="uppercase text-gray">
         <span className="text-white font-Roboto"> 20% </span> Discount For <span className="text-white">1 month</span> Account
          </p>
        </div>
        <div className="flex justify-between items-center flex-row w-full">
          <div>
          <h1 className="flex-1 font-semibold font-mono sm:text-7xl text-[52px]">
            The Next
            <br className="sm:block hidden" />
            <span className="text-gradient"> Generation
            </span>
            <br />
            Payment Method
            <AiFillPrinter color="red"/>
          </h1>
          <p className="mt-4 font-mono text-gray-300 max-w-sm">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your need.We examine annual percentage rates, annual fees.
          </p>
          </div>
          <div className="">
          <GetStarted />
          </div>
        </div>
      </div>
      <div className="flex-1 flex">
        <img src={robot} alt="banner" className="w-full h-full relative z-50 max-sm:mt-20" />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>

      </div>
    </section>
)

export default Hero