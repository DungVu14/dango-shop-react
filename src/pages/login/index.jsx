import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function LoginPage(props) {

  return (
    <Container className='login-page'>
      <Row>
        <Col xs={6} ><img src="../../assets/images/login_background.png" alt="" className='login-image' /></Col>
        <Col xs={6}>
          <div className="login-form">
            <h2 className="title">ĐĂNG NHẬP</h2>
            <div className="social-login">
              <div className="google">
                <img src="../../assets/images/Google.svg" alt="google" />
                <span>Đăng nhập với Google</span>
              </div>
              <div className="facebook">
                <img src="../../assets/images/Facebook.svg" alt="facebook" />
                <span>Đăng nhập với Facebook</span>
              </div>
            </div>
            <div className="or">
              <div className="line"></div>
              <span>Hoặc</span>
              <div className="line"></div>
            </div>
            <form>
              <div className="username">
                <label htmlFor="username">Tên đăng nhập</label>
                <div className="input">
                  <img src="../../assets/images/user.svg" alt="" />
                  <input type="text" name="username" id="username" placeholder='Username' />
                </div>
              </div>
              <div className="password">
                <label htmlFor="password">Mật khẩu</label>
                <div className="input">
                  <img src="../../assets/images/lock.svg" alt="" />
                  <input type="password" name="password" id="password" placeholder='Password' />
                  <img src="../../assets/images/eye.svg" alt="" className='eye' />
                </div>
              </div>
            </form>
            <Link className="forget-password" to="/forgot-password"> Quên mật khẩu?</Link>
            <Link to={'/'}><button>ĐĂNG NHẬP</button></Link>
            <div className="register">
              <span>Bạn chưa có tài khoản?</span>
              <Link to="/register">Đăng ký ngay</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
