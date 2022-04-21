import React, { useState } from 'react'
import './style.css'

function InputNumber({ number }) {
  const [quantity, setQuantity] = useState(number || 1);

  const handleIncrement = (e) => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrement = (e) => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleChange = (e) => {
    var value = e.target.value.replace(/[^0-9]/, '');
    value = (value === '' ? 1 : value);
    value = parseInt(value);

    setQuantity(value)
  }

  return (
    <div className="component-quantity-input" >
      <img src="../../assets/images/MinusCircle.png" alt="" onClick={(e) => handleDecrement(e)} />
      <input type="text" value={quantity} onChange={(e) => handleChange(e)} />
      <img src="../../assets/images/plus-circle.png" alt="" onClick={(e) => handleIncrement(e)} />
    </div >
  )
}

export default InputNumber
