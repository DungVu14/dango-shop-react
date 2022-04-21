import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { products } from '../../mocks/products'
import './style.css'

function UserOrders() {
  return (
    <div className='user-orders'>
      <div className="header">
        <NavLink to='confirm'>Chờ xác nhận</NavLink>
        <NavLink to='wait'>Chờ lấy hàng (2)</NavLink>
        <NavLink to='delivering'>Đang giao (2)</NavLink>
        <NavLink to='delivered'>Đã giao (2)</NavLink>
      </div>

      <div className="content">
        <Routes>
          <Route path='/confirm' element={<Confirm />} />
          <Route path='/wait' element={<Wait />} />
          <Route path='/delivering' element={<Delivering />} />
          <Route path='/delivered' element={<Delivered />} />
        </Routes>
      </div>
    </div>
  )
}

function Confirm() {
  return (
    <div className="confirm">
      <p>Không có đơn hàng nào</p>
      <button>Mua sắm ngay !</button>
    </div>
  )
}

function Wait() {
  const random = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="wait">
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
              <button className="fail huy">Hủy đơn hàng</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Delivering() {
  const random = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="wait">
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
              <button className='success danhan'>Đã nhận hàng</button>
              <button className="fail trahang">Yêu cầu trả hàng</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Delivered() {
  const random = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="wait">
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
              <button className='success danhgia'>Đánh giá </button>
              <button className="fail mualai">Mua lại </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserOrders