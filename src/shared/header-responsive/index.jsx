
import React, { useState } from 'react';
import { Dropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.css';

function HeaderResponsive() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate("/products", { state: filter });
      setFilter('')
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='header'>
      <Link to="/"><img src="../../assets/images/logo.png" alt="" className='logo' /></Link>
      <div style={{ display: 'flex' }}>
        <div className="search">
          <input type="search" value={filter} onChange={(e) => setFilter(e.target.value)} onKeyDown={handleEnter} />
        </div>

        <div className="tools">
          <Link to="/cart" className="cart"><img src="../../assets/images/cart.svg" alt="" /></Link>

          <Dropdown className="user">
            <Dropdown.Toggle id="dropdown-basic" onClick={handleShow}>
              <img src="../../assets/images/nav.svg" alt="" className="user" />
            </Dropdown.Toggle>
          </Dropdown>

          <Offcanvas show={show} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <NavLink to="/">Trang chủ</NavLink>
              <NavLink to="/products">Sản phẩm</NavLink>
              <NavLink to="/blogs">Blog</NavLink>
              <NavLink to="/intro">Giới thiệu</NavLink>
              <NavLink to="/helps/faq/faq-user">Trợ giúp</NavLink>
              <NavLink to="/login">Đăng nhập</NavLink>
              <NavLink to="/register">Đăng ký</NavLink>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default HeaderResponsive;