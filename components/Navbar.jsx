import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.logo}><a href="">Pizzaliano</a></div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
              <li className={styles.listItem}><a href="#">About</a></li>
              <li className={styles.listItem}><a href="#">Events</a></li>
              <li className={styles.listItem}><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>   
              <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
              <div className={styles.counter}>2</div>
          </div>
        </div>
      </div>
      <div className={styles.mobileItem}>
        <ul className={styles.mobileList}> 
          <li className={styles.mobileListItem}><a href="">About</a></li>
          <li className={styles.mobileListItem}><a href="">Events</a></li>
          <li className={styles.mobileListItem}><a href="">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
