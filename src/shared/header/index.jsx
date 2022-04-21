
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.css';

function Header() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('');
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate("/products", { state: filter });
      setFilter('')
    }
  }
  // neu go input lu gia tri vao filter, neu enter chuyen trang san pham va gui them gia tri filter 

  return (
    <header>
      <Link to="/"><img src="../../assets/images/logo.png" alt="" className='logo' /></Link>
      <nav>
        <NavLink to="/">Trang chủ</NavLink>
        {/* the navlink tra ve class laf active  */}
        <NavLink to="/products">Sản phẩm</NavLink>
        <NavLink to="/blogs">Blog</NavLink>
        <NavLink to="/intro">Giới thiệu</NavLink>
        <NavLink to="/helps/faq/faq-user">Trợ giúp</NavLink>
      </nav>
      <div className="search">
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} onKeyDown={handleEnter} />
        <img src="../../assets/images/search.svg" alt="" onClick={() => { navigate("/products", { state: filter }); setFilter('') }} />
      </div>
      <div className="tools">
        <Link to="/cart" className="cart"><img src="../../assets/images/cart.svg" alt="" /></Link>

        <Dropdown className="user">
          <Dropdown.Toggle id="dropdown-basic">
            <img src="../../assets/images/user_2.svg" alt="" className="user" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/user/info">Tài khoản của tôi</Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/orders/confirm">Đơn hàng</Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/products">Sản phẩm yêu thích</Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/blogs">Bài viết yêu thích</Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">Đăng xuất</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;