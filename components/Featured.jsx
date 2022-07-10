import React from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

const Featured = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.featuredContainer}>
          <div>
           <div className={styles.featuredHeader}>Fresh Ingredıents</div>
           <div className={styles.featuredHeader}>Thın Dough</div>
           <div className={styles.featuredText}>Made with love by italian chefs</div>
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

export default Featured
