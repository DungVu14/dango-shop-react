import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import FAQOrder from '../../components/faq-order'
import FAQPolicy from '../../components/faq-policy'
import FAQRefund from '../../components/faq-refund'
import FAQUser from '../../components/faq-user'
import './style.css'

function FAQ(props) {
  return (
    <div className='faq-page'>
      <div className="questions">
        <h3>Danh mục câu hỏi</h3>
        <NavLink to='/helps/faq/faq-user'>Tài khoản </NavLink>
        <NavLink to='/helps/faq/faq-order'>Đơn hàng & Thanh toán </NavLink>
        <NavLink to='/helps/faq/faq-refund'>Trả hàng & Hoàn tiền</NavLink>
        <NavLink to='/helps/faq/faq-policy'>Các chính sách </NavLink>
      </div>
      <div className="answers">
        <h3>Câu hỏi </h3>
        <Routes>
          <Route>
            <Route path="/faq-user" element={<FAQUser />} />
            <Route path="/faq-order" element={<FAQOrder />} />
            <Route path="/faq-refund" element={<FAQRefund />} />
            <Route path="/faq-policy" element={<FAQPolicy />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default FAQ