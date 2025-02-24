import styles from "./style"
const Render = () => (
  // Main Components Goes Down Below Here
  <div className="w-full bg-dark overflow-hidden">

    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
      navbar
    </div>
    </div>

    {/* Hero Section */}
    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          Hero
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      States
      Business
      Billing
      CardDeal
      Testimonials
      Clients
      CTA
      Footer
      </div>
    </div>
  </div>
) 

export default Render