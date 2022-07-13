import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="220px" height="220px"/>
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        A pizza
      </p>
    </div>
  )
}

export default PizzaCard
