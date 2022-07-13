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
            <div className={styles.sizes}>
              <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src="/img/size.png" layout='fill' alt=""/>
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Large</span>
              </div>
            </div> 
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.options}>
              <div className={styles.option}>
                <input 
                  type="checkbox" 
                  id="extra" 
                  name="extra" 
                  className={styles.checkbox}
                />
                <label for="extra">
                  Extra Ingredients
                </label>
              </div>
              <div className={styles.option}>
                <input 
                  type="checkbox" 
                  id="sauce" 
                  name="sauce" 
                  className={styles.checkbox}
                />
                <label for="sauce">
                  Mexican Sauce
                </label>
              </div>
              <div className={styles.option}>
                <input 
                  type="checkbox" 
                  id="cheese" 
                  name="cheese" 
                  className={styles.checkbox}
                />
                <label for="cheese">
                  Mozarella Cheese
                </label>
              </div>
            </div>
            <div className={styles.add}>
              <input type="number" defaultValue="1" min="1" className={styles.quantity}/>
              <button className={styles.addButton}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product;
