import React from 'react'
import './style.css';
import Stars from '../stars/index'
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const { image, name, price, rating, id } = product;
  return (
    <div className="product-item">
      <Link to={`/product/${id}`}>< img src={image} alt="" className='image' /></Link>
      <p>{name}</p>
      <div className="div">
        <span>{price}</span>
        <Stars stars={rating} />
      </div>
    </div>
  )
}

export default ProductItem
