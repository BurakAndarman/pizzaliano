import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
    const [size,setSize]=useState(0);

  const pizza={
    id:1,
    img:"/img/pizza.png",
    name:"CAMPAGNOLA",
    price:[19.9,23.9,27.9],
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam auctor lacinia. Nullam accumsan eros magna, quis lobortis arcu malesuada sed."
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" objectFit='contain' alt=""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
        </div>
    </div>
  )
}

export default Product;
