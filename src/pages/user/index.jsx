import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import UserAddress from '../user-address'
import UserBlogs from '../user-blogs'
import UserChangePassword from '../user-change-password'
import UserInfo from '../user-info'
import UserOrders from '../user-orders'
import UserOrdersCancel from '../user-orders-cancel'
import UserOrdersRefund from '../user-orders-refund'
import UserProducts from '../user-products'
import './style.css'

function User() {
  return (
    <div className='user-page'>
      <div className="selected">
        <div className="avatar">
          <img src="../../assets/images/user.png" alt="" />
          <p>Nhatdiepchithu</p>
        </div>
        <div className="title">
          <img src="../../assets/images/person.svg" alt="" />
          <p>Tài khoản của tôi </p>
        </div>
        <NavLink to='/user/info'>Hồ sơ </NavLink>
        <NavLink to='/user/address'>Địa chỉ </NavLink>
        <NavLink to='/user/change-password'>Đổi mật khẩu</NavLink>
        <div className="title">
          <img src="../../assets/images/order.svg" alt="" />
          <p>Đơn hàng của tôi </p>
        </div>
        <NavLink to='/user/orders/confirm'>Đơn hàng</NavLink>
        <NavLink to='/user/orders-cancel'>Đơn hủy </NavLink>
        <NavLink to='/user/orders-refund'>Đơn hoàn trả </NavLink>
        <div className="title">
          <img src="../../assets/images/Heart.svg" alt="" />
          <p>Yêu thích </p>
        </div>
        <NavLink to='/user/products'>Sản phẩm yêu thích </NavLink>
        <NavLink to='/user/blogs'>Bài viết yêu thích </NavLink>
      </div>

      <div className="page">
        <Routes>

          <Route path="/info" element={<UserInfo />} />
          {/* khi route duong dan info thi hien thi trang userinfo  */}
          <Route path="/address" element={<UserAddress />} />
          <Route path="/change-password" element={<UserChangePassword />} />
          <Route path="/orders/*" element={<UserOrders />} />
          <Route path="/orders-cancel" element={<UserOrdersCancel />} />
          <Route path="/orders-refund" element={<UserOrdersRefund />} />
          <Route path="/products" element={<UserProducts />} />
          <Route path="/blogs" element={<UserBlogs />} />
        </Routes>
      </div>
    </div>
  )
}

export default User