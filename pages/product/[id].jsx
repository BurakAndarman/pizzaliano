import React from 'react'
import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'

const Product = ({pizza}) => {
  const [price,setPrice]=useState(pizza.prices[0]);
  const [size,setSize]=useState(0);
  const [quantity,setQuantity]=useState(1);
  const [extras,setExtras]=useState([]);
  const dispatch=useDispatch();

  const handlePrice=(number)=>{
    setPrice(price+number);
  }

  const handleSize=(sizeIndex)=>{
    const difference = pizza.prices[sizeIndex]-pizza.prices[size];
    setSize(sizeIndex);
    handlePrice(difference);
  }

  const handleChange=(e,option)=>{
    const checked=e.target.checked;

    if(checked){
      setExtras(prev=>[...prev,option]);
      handlePrice(option.price);
    }
    else{
      setExtras(extras.filter((extra)=> extra._id !== option._id));
      handlePrice(-option.price);
    }
  }

  const handleClick=()=>{   
    dispatch(addProduct({...pizza,extras,quantity,price}))
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={pizza.img} layout="fill" objectFit='contain' alt=""/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={()=>handleSize(0)}>
                <Image src="/img/size.png" layout='fill' alt=""/>
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(1)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={()=>handleSize(2)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Large</span>
              </div>
            </div> 
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.options}>
              {pizza.extraOptions.map((option)=>(
                  <div className={styles.option} key={option._id}>
                    <input 
                      type="checkbox" 
                      id={option.text}
                      name={option.text}
                      className={styles.checkbox}
                      onChange={(e)=>handleChange(e,option)}
                    />
                    <label htmlFor="extra">
                      {option.text}
                    </label>
                  </div>
              ))}
            </div>
            <div className={styles.add}>
              <input type="number" defaultValue="1" min="1" className={styles.quantity} onChange={(e)=>setQuantity(Number(e.target.value))}/>
              <button className={styles.addButton} onClick={()=>handleClick()}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({params})=>{
  const res=await axios.get(`http://localhost:3000/api/products/${params.id}`)
  return {
    props:{
      pizza:res.data
    }
  }
}


export default Product;