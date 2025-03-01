import { clients } from "../constants"
const Clients = () => (
  <section id="Clients" className="flex flex-row justify-between mt-10 flex-wrap">
    {clients.map((client)=> (
      <img key={client.id} src={client.logo} height={200} width={200}  className="object-contain cursor-pointer" alt="log" />
    ))}
  </section>
)

export default Clients