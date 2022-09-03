import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const quantity=useSelector((state)=>state.cart.quantity)

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
        <Link href={`/Cart`} passhref>
          <div className={styles.item} style={{cursor:"pointer"}}>
            <div className={styles.cart}>   
                <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
                <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
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
