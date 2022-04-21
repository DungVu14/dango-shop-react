import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'

function ForgotPasswordPage(props) {
  return (
    <Container className='forgotpass-page'>
      <Row>
        <Col xs={6} ><img src="../../assets/images/login_background.png" alt="" className='login-image' /></Col>
        <Col xs={6}>
          <div className="forgotpass-form">
            <h2 className="title">QUÊN MẬT KHẨU</h2>
            <form>
            <div className="password">
                <label htmlFor="password">Mật khẩu</label>
                <div className="input">
                  <img src="../../assets/images/lock.svg" alt="" />
                  <input type="password" name="password" id="password" placeholder='Password' />
                  <img src="../../assets/images/eye.svg" alt="" className='eye' />
                </div>
              </div>
              <div className="password">
                <label htmlFor="password">Mật khẩu</label>
                <div className="input">
                  <img src="../../assets/images/lock.svg" alt="" />
                  <input type="password" name="password" id="password" placeholder='Re-enter password' />
                  <img src="../../assets/images/eye.svg" alt="" className='eye' />
                </div>
              </div>
            </form>
            <div className="update">
              <Link to="/login"><button>CẬP NHẬT MẬT KHẨU</button></Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ForgotPasswordPage