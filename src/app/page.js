import styles from './page.module.css'
import {Roboto_Slab, Lato} from 'next/font/google'
const roboto = Roboto_Slab({display: "swap", subsets: ["latin"], weight: ["400", "700"]})
const lato = Lato({display: "swap", subsets: ["latin"], weight: ["300", "700"]})

export default function GymHome() {
  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
      <img src="/gym.jpg" alt="Gym background" className={styles.heroImage} /> 
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Unleash Your Inner Beast</h1>
          <p className={styles.heroSubtitle}>Elevate your fitness game with us!</p>
          <button className={styles.ctaButton}>Join The Challenge</button>
        </div>

       
      </section>
      
      {/* Motivation Section */}
      <section className={styles.motivationSection}>
        <h2 className={styles.motivationTitle}>Your Limits Exist Only in the Mind</h2>
        <p className={styles.motivationText}>Join a community that pushes boundaries, breaks barriers, and achieves the unthinkable.</p>
        <button className={styles.exploreButton}>Explore Programs</button>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Start Your Journey</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <button className={styles.submitButton}>Get Started</button>
        </form>
      </section>

    </div>
  );
}
