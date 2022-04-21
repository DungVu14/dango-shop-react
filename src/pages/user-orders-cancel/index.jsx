import React from 'react'
import { products } from '../../mocks/products'
import './style.css'

function UserOrdersCancel() {
  const random = Math.floor(Math.random() * 10) + 1;

  return (
    <div className='user-orders-cancel'>
      <div className="header">
        <h3>Đơn hàng đã hoàn trả </h3>
      </div>

      <div className="content">
        {products.slice(random, random + 2).map((item, index) => {
          return (
            <div className="order-item" key={index}>
              <div className="product">
                <img src={item.image} alt="" />
                <div className="info">
                  <p>{item.name}</p>
                  <span>Phân loại: {item.category}</span>
                  <span>Số lượng:  1</span>
                </div>
              </div>
              <div className="summery">
                <span>{item.price}</span>
                <p>Tổng tiền: {item.price}</p>
                <button>Mua lại</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserOrdersCancel