import styles from "./style"

import { Billing,CardDeal,Clients,CAT,Footer,Hero,Navbar,States,Testimonials, Business } from "./components/index";

const Render = () => (
  <div className="w-full bg-black overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      <Navbar />
    </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <States />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <CAT />
      <Footer/>
      
      </div>
    </div>
  </div>
) 

export default Render