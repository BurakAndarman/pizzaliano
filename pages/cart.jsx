import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    <tr className={styles.tr}>
                        <td className={styles.imgColumn}>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout='fill' objectFit="cover"/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Extra Ingredient, Mexican Sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>1</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.imgColumn}> 
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout='fill' objectFit="cover"/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Extra Ingredient, Mexican Sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>1</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.imgColumn}>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout='fill' objectFit="cover"/>
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Extra Ingredient, Mexican Sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>1</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.80</span>
                        </td>
                    </tr>
                </tbody>
            </table>            
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> $79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> $0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> $79.60
                </div>
                <button className={styles.button}>CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
