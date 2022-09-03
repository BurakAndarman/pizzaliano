import React from 'react'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useSelector,useDispatch } from 'react-redux'
import { reset } from '../redux/cartSlice'

const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart);

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
                    {cart.products.map((product)=>
                        <tr className={styles.tr} key={product._id}>
                            <td className={styles.imgColumn}>
                                <div className={styles.imgContainer}>
                                    <Image src={product.img} alt="" layout='fill' objectFit="cover"/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>{product.title}</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    {product.extras.map((extra)=>(
                                        <div style={{margin:".5em"}} key={extra._id}>{extra.text}</div>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>${product.price}</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>{product.quantity}</span>
                            </td>
                            <td>
                                <span className={styles.total}>${product.price*product.quantity}</span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>            
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> ${cart.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> $0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> ${cart.total}
                </div>
                <button className={styles.button} onClick={()=>handleClick()}>CHECKOUT</button>
            </div>
        </div>
    </div>
  )
}

export default Cart
