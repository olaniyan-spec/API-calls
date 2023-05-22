import React from 'react'
import './Product.css'

const Product = (props) => {
  return (
    <div className='product-main'>
        <div className='card'>
            <h4>{props.name}</h4>
            <h4>{props.username}</h4>
            <p>{props.email}</p>
            <p>{props.address}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
  )
}

export default Product