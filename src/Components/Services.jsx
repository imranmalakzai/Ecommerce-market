import { services } from "./util"
import ServiceCard from "./util/ServiceCard"
function Services() {
  return (
    <section className="flex max-sm:justify-center justify-center items-center flex-wrap mt-18 max-sm:flex-col gap-16">
      {
        services.map((Product)=>(
          <ServiceCard key={Product.label} {...Product}/>
        ))
      }
    </section>
  )
}

export default Services