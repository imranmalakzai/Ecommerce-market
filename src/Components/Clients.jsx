import { quotes } from "../assets"
import { Star } from "../assets"
import { styles } from "../styles"
import { data as clientsData } from "../Constants"
function Clients() {
  return (
    <section className={`${styles.Layout} mt-15 mb-15`}>
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-3xl font-semibold">What Our <span className="text-cyan">
          Clients</span> Say About US ?</h1>
          <div className="flex-1 w-full flex justify-between flex-wrap mt-5">
             {
              clientsData.map((client)=>(
                <div className="shadow-2xl p-13 rounded-2xl">
                  <img src={quotes} alt="quotes" />
                  <p className="max-w-[270px] mt-1">{client.idea}</p>
                  <div className="flex items-center gap-4 mt-5">
                    <img src={client.imgURL} className="h-[50px] w-[50px] rounded-full" alt="clients" />
                   <div>
                   <h1 className="text-xl font-semibold">{client.name}</h1>
                  <div className="flex">
                  <img src={Star} alt="star" height={20} width={20} /> 
                  <p>4.5</p>
                  </div>
                  
                   </div>
                  </div>
                </div>
              ))
             }
          </div>
        </div>
        <div></div>

    </section>
  )
}

export default Clients