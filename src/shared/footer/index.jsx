import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

function Footer() {
  return (
    <footer>
      <div className="left">
        <div className="shop">
          <img src="../../assets/images/logo_2.png" alt="" className="logo" />
          <h2>Dango Shop</h2>
        </div>
        <div className="info">
          <div className="address">Địa chỉ: 96 Định Công - Thanh Xuân - Hà Nội</div>
          <div className="email">Email: DangoShop@gmail.com</div>
          <div className="phone">Số điện thoại: 0987654321</div>
        </div>
        <div className="social">
          <img src="../../assets/images/facebook.png" alt="" className="facebook" />
          <img src="../../assets/images/instagram.png" alt="" className="instagram" />
          <img src="../../assets/images/twitter.png" alt="" className="twitter" />
        </div>
      </div>
      <div className="right">
        <div className="intro">
          <h3>Giới thiệu</h3>
          <Link to='/security'>Chính sách bảo mật</Link>
          <Link to='/terms'>Điều khoản mua sắm </Link>
          <Link to='/rules'>Quy định thanh toán</Link>
          <Link to='/transport'>Vận chuyển</Link>
          <Link to='/intro'>Về Dango shop</Link>
        </div>
        <div className="product">
          <h3>Sản phẩm</h3>
          <Link to='/products'>Phụ kiện điện thoại</Link>
          <Link to='/products'>Phụ kiện thời trang</Link>
          <Link to='/products'>Quà tặng</Link>
          <Link to='/products'>Trang trí nội thất</Link>
          <Link to='/products'>Văn phòng phẩm </Link>
        </div>
        <div className="help">
          <h3>Trợ giúp</h3>
          <Link to='/helps/faq/faq-user'>FAQ</Link>
          <Link to='/helps/contact'>Liên hệ</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;