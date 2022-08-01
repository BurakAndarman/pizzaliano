import React from 'react'
import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'
import Offer from './Offer'

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container} id="pizzaList">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Offers</h1>
        <hr className={styles.line}/>
        <div className={styles.list}>
            <Offer/>
            <Offer/>
            <Offer/>
        </div>
      </div>
      <div className={styles.wrapper} style={{marginTop:"5em"}}>
        <h1 className={styles.title}>Pızzas</h1>
        <hr className={styles.line}/>
        <div className={styles.list}>
            {pizzaList.map((pizza)=>(
              <PizzaCard key={pizza._id} pizza={pizza}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PizzaList
