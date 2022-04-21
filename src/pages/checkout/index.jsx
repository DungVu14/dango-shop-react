import React from 'react';
import { Breadcrumb, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputNumber from '../../components/input-number';
import './style.css';

function Checkout() {
  const [modalShow, setModalShow] = React.useState(false);
  // set gia tra hien thi cua modal 

  return (
    <div className='checkout-page'>
      <Breadcrumb className='link'>
        <Breadcrumb.Item active>Trang chủ / Giỏ hàng </Breadcrumb.Item>
      </Breadcrumb>

      <h5>Thông tin nhận hàng</h5>
      <div className="info">
        <table>
          <tbody>
            <tr>
              <td>Họ tên:</td>
              <td>Hạ Diệp</td>
            </tr>
            <tr>
              <td>Số điện thoại:</td>
              <td>(+84) 889692690</td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>Địa chỉ: </td>
              <td>
                <p>96 Định Công </p>
                <p>Phường Định Công </p>
                <p>Quận Hoàng Mai </p>
                <p>Hà Nội </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '30px' }}>
          <span className="macdinh">Mặc định</span>
          <span className="thaydoi">Thay đổi</span>
        </div>
      </div>

      <Table className='table' borderless>
        <thead>
          <tr>
            <th className='sanpham'>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='sanpham'>
              <img src="../../assets/images/products/dc596(1).png" alt="" />
              <span className="name">Dây chuyền DC 596</span>
            </td>
            <td className='dongia'>415.000 đ</td>
            <td><InputNumber /></td>
            <td className='tongtien'>415.000 đ </td>
          </tr>

          <tr>
            <td className='sanpham'>
              <img src="../../assets/products/balo.png" alt="" />
              <span className="name">Balo nữ BL 100</span>
            </td>
            <td className='dongia'>125.000 đ</td>
            <td><InputNumber number={2} /></td>
            <td className='tongtien'>250.000 đ</td>
          </tr>
        </tbody>
      </Table>

      <div className="coupon">
        <img src="../../assets/images/coupon.svg" alt="" />
        <span style={{ marginLeft: '16px' }}>Mã giảm giá</span>
        <span style={{ marginLeft: '75px' }}>-10.000 đ</span>
      </div>

      <div className="payment">
        <h4>Phương thức thanh toán</h4>
        <input type="radio" id="zalo" name="payment" value="Thanh toán bằng ví điện tử Zalopay" />
        <label htmlFor="zalo">Thanh toán bằng ví điện tử Zalopay</label><br />
        <input type="radio" id="momo" name="payment" value="Thanh toán bằng ví điện tử Momo" />
        <label htmlFor="momo">Thanh toán bằng ví điện tử Momo</label><br />
        <input type="radio" id="cod" name="payment" value="Thanh toán khi nhận hàng" />
        <label htmlFor="cod">Thanh toán khi nhận hàng</label><br />
      </div>

      <div className="summery">
        <div className="dathang">Nhấn <span>“ Đặt hàng”</span> đồng nghĩa với việc bạn tuân thủ điều khoản của shop</div>
        <div className="sum">
          <div>
            <span>Tiền hàng</span>
            <span>665.000 đ</span>
          </div>
          <div>
            <span>Mã giảm giá</span>
            <span>10.000 đ</span>
          </div>
          <div>
            <span>Phí vận chuyển</span>
            <span>15.000 đ</span>
          </div>
          <div className='tongcong'>
            <span>Tổng cộng</span>
            <span>670.000 đ</span>
          </div>
          <button onClick={() => setModalShow(true)}>Đặt hàng</button>
        </div>
      </div>

      <MyModal
        show={modalShow}
      />
    </div>
  )
}

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='payment-modal'
    >
      <Modal.Body>
        <div className="text">
          <h3>Thanh toán thành công! </h3>
          <p>Cảm ơn bạn đã mua sắm tại Dango </p>
          <Link to='/'><button>Trở lại mua sắm</button></Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Checkout