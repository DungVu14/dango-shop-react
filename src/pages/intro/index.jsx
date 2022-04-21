import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

function Intro() {
  return (
    <Container className='intro-page'>
      <Row>
        <div>
          <Col><img src="../../assets/images/banner_intro.png" alt="" className='banner_intro' /></Col>
          <Col className="intro-form">
            <div>
              <h6 className="title">Về Dango</h6>
              <p >Xin chào các bạn, </p>
              <p> Dango - Phụ kiện và Quà tặng chúng mình là một chuỗi cửa hàng với vô vàn sản phẩm đa dạng luôn được cập nhật theo xu hướng hot nhất phù hợp với mọi lứa tuổi.</p>
              <p> Ra mắt năm 2021, Dango được xây dựng nhằm cung cấp cho người dùng những trải nghiệm dễ dàng, an toàn và nhanh chóng khi mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh toán và vận hành vững mạnh.</p>
              <p> Ở Dango - Phụ kiện và Quà tặng, các bạn có thể tìm thấy rất nhiều items hấp dẫn như gấu bông, văn phòng phẩm, items thời trang, phụ kiện điện thoại, sản phẩm idol, đồ trang sức, đồ gia dụng tiện ích,...</p>
              <p> Hơn nữa, Dango có website được cập nhật liên tục các sản phẩm hot hit và những mã giảm giá đặc biệt, đồng thời có những hình thức vận chuyển nhanh, tiện lợi đảm bảo các bạn sẽ yêu thích.</p>
            </div>
            <img src="../../assets/images/gt1.png" alt="" className='gt1' />
          </Col>
          <Col className="intro-form_2">
            <img src="../../assets/images/gt2.png" alt="" className='gt2' />
            <div>
              <h6 className="title2">Mục tiêu của chúng tôi</h6>
              <p>Chúng tôi tin tưởng vào sức mạnh khai triển của công nghệ và mong muốn góp phần làm cho thế giới trở nên tốt đẹp hơn bằng việc kết nối cộng đồng người mua và người bán thông qua việc cung cấp một nền tảng thương mại điện tử.</p>
              <p>Đối với người dùng trên toàn khu vực, Dango mang đến trải nghiệm mua sắm trực tuyến tích hợp với vô số sản phẩm đa dạng chủng loại, cộng đồng người dùng năng động và chuỗi dịch vụ liền mạch.</p>
              <p>Chúng tôi có niềm tin vào tính gần gũi mà thanh liêm, nền tảng vững chắc cho một cuộc sống trung thực, bình dân và thành thật với bản thân.
                Chúng tôi dễ gần, đáng yêu và tràn đầy năng lượng, luôn mang đến niềm vui cho những người xung quanh.
              </p>
            </div>
          </Col>
          <div className="intro-info">
            <h6 className="title">Hệ thống cửa hàng</h6>
            <p className="cs1"> Cơ sở 1: 96 Định Công - Thanh Xuân - Hà Nội </p>
            <p className="cs1"> Cơ sở 2: 120 Xuân Thủy - Cầu Giấy - Hà Nội </p>
          </div>

        </div>
        <div>
        </div>
      </Row >
    </Container >
  );
}

export default Intro;