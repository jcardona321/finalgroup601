import React from 'react';
import styles from './Footer.module.css';
// import { Inknut_Antiqua, Open_Sans } from 'next/font/google'; // Commented out as it's not used.
import Image from 'next/image';
import Link from 'next/link';

// const inknut = Inknut_Antiqua({ display: "swap", subsets: ["latin"], weight: ["500"] }); // Commented out as it's not used.
// const opensans = Open_Sans({ display: "swap", subsets: ["latin"], weight: ["500", "700"] }); // Commented out as it's not used.

const GymFooter = () => {
  
  return (
    <footer className={styles.footer} id="ConnectWithUs">
      <div className={styles.branding}>
        <Image className="gymLogo" src="/gymLogo.png" alt="Fitness Club Logo" width={80} height={80} />
        <h3>Fitness Club</h3>
      </div>

      <div className={styles.contactInfo}>
        <a href="#" className={styles.linkItem}>Email: contact@fitnessclub.com</a>
        <a href="#" className={styles.linkItem}>Phone: +1 123 456 7890</a>
      </div>

      <div className={styles.socialMedia}>
        <a href="#" className={styles.linkItem}>Instagram</a>
        <a href="#" className={styles.linkItem}>Facebook</a>
        <a href="#" className={styles.linkItem}>YouTube</a>
      </div>

      <div className={styles.disclaimer}>
        <p>© 2023 Fitness Club. Stay Fit, Stay Awesome!</p>
      </div>
    </footer>
  );
};

export default GymFooter;
