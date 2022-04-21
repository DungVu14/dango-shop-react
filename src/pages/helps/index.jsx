import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Contact from '../Contact'
import FAQ from '../FAQ'
import './style.css'

function Helps() {
  return (
    <div className='help-page'>
      <div className="selected">
        <NavLink to='/helps/faq/faq-user'>FAQ</NavLink>
        <NavLink to='/helps/contact'>Liên hệ</NavLink>
      </div>

      <Routes>
        <Route path="/faq/*" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Helps
