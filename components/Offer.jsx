import React from 'react'
import styles from '../styles/Offer.module.css'
import Image from 'next/image'

const Offer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Double Pleasure</h2>
        <p className={styles.desc}>Two medium pizza is just <span className={styles.price}>$22</span></p>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/img/offer.png" alt="" width="200" height="200"/>
      </div>
    </div>
  )
}

export default Offer
