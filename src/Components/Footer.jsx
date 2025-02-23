import { footerLogo } from "../assets/images"
import { footer } from "./util"
import Icons from "./util/Icons"
function Footer() {
  return (
    <footer className="bg-black w-full flex max-sm:flex-col gap-16 min-h-20 text-white justify-between items-center padding">
      <div className="flex flex-col gap-5">
      <img src={footerLogo} alt="footer" width={140} height={140} />
      <p className="capitalize max-w-sm text-gray-400 text-xl">the world famous and best shoes in The history We provide The biggest Sport Shoes in the Decade!</p>
      <div className="flex gap-8">
        {
          footer.map((footer,key)=>(
            <Icons key={key} {...footer} />
          ))
        }
      </div>

      </div>
      <div>Hi</div>
    </footer>
  )
}

export default Footer