import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heroContainer}>
          <div>
           <div className={styles.heroHeader}>Fresh Ingredıents</div>
           <div className={styles.heroHeader}>Thın Dough</div>
           <div className={styles.heroText}>Made with love by italian chefs</div>
           <div className={styles.anchor}>
            <a href='#pizzaList'>see the pızzas</a>
           </div>
          </div>
          <Image src="/img/featured.png" alt="" height="400px" width="800px"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
