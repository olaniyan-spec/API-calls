import React, { useState,useEffect } from 'react'
import Product from './Product'
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchHandler = async ()=>{
            await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json()).then((data)=>setProducts(data))
            .catch((error)=>console.log(error))
        }
        fetchHandler()
    })
  return (
    <div className='main'>
        <ul>
        {products.map((product, key)=>(
            <li key={key}>
                <Product 
                id = {key} 
                name={product.name} 
                username={product.username} 
                email={product.email}
                address={product.address.street}
                />
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Products