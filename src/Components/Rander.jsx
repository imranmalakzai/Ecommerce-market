import {Navbar,Hero,PopularProducts,SuperQuality,Services,SpacialOffer,SubScribe,CustomersReviews,Footer} from '../../index'


function Rander() {
  return (
   <main>
    <Navbar />
    <section className='padding-x' >
      <Hero />
    </section>
    <section className="padding"  >
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x">
      <Services />
    </section>
    <section className="padding">
      <SpacialOffer />
    </section>
    <section className="bg-color padding">
      <CustomersReviews />
    </section>
    <section className="padding-y">
      <SubScribe />
    </section>
   <footer>
    <Footer />
   </footer>
   </main>
  )
}

export default Rander