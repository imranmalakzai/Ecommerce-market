import {Navbar,Hero,Services,Clients,Contact,Footer, About} from './Components'
import Profession from './Components/Profession'

const Render = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Profession />
      <Clients />
      <Contact />
      <Footer />

    </div>
  )
}

export default Render