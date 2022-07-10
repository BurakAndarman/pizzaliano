import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>Pizzaliano</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
            <li className={styles.listItem}>Home</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>About</li>
            <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>   
            <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
            <div className={styles.counter}>2</div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
