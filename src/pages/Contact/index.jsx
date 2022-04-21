import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

function Contact(props) {
  return (
    <Container className='contact-page'>
      <Row>
        <div>
          <Col className="contact-info">
            <div>
              <h3 className="title">Bạn có vấn đề cần sự trợ giúp?</h3>
              <i className="text">Bạn gặp vấn đề không nằm trong các câu hỏi FAQ, có thể liên hệ với Dango qua các kênh thông tin, hoặc điền form muộn nhất 24h sau Dango sẽ trả lời bạn.</i>
              <div className="info_0">
                <div className="address_00">
                  <img src="../../assets/images/map-pin.svg" alt="address" />
                  <span>Địa chỉ</span>
                  <p>96 Định Công- Thanh Xuân- Hà Nội </p>
                </div>
                <div className="address_03">
                  <img src="../../assets/images/mail.svg" alt="email" />
                  <span>Email</span>
                  <p>Dangoshop@gmail.com </p>
                </div>
              </div>
              <div className="info_1">
                <div className="address_01">
                  <img src="../../assets/images/phone.svg" alt="phone" />
                  <span>Điện thoại</span>
                  <p>(Hotline) +84987654321 </p>
                  <p>(Mobile) +84894963415</p>
                </div>
                <div className="address_02">
                  <img src="../../assets/images/clock.svg" alt="clock" />
                  <span>Thời gian làm việc</span>
                  <p>(Thứ 2-Thứ 6)      : 8 AM- 17 PM  </p>
                  <p>(Thứ7- Chủ nhật) : 9 AM- 18 PM </p>
                </div>
              </div>
              <div className="social1">
                <img src="../../assets/images/fb.svg" alt="fb" />
                <img src="../../assets/images/ig.svg" alt="ig" />
                <img src="../../assets/images/tw.svg" alt="tw" />
              </div>
            </div>
          </Col>
          <Col className="contact-info-2">
            <div className="contact-info-2-form">
              <input type="text" className="name" placeholder="Họ tên" />
              <input type="text" className="phone" placeholder="Số điện thoại" /><br />
              <input type="email" className="email" placeholder="Email" /> <br />
              <input type="text" className="body" placeholder="Chủ đề câu hỏi" /> <br />
              <textarea type="text" className="body2" placeholder="Vấn đề cần giải đáp"></textarea><br />
              <button className="button">Gửi thắc mắc</button>
            </div>
          </Col>
        </div>

      </Row>

    </Container>
  )
}

export default Contact
