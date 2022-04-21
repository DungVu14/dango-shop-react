import React from 'react'
import { Breadcrumb, Col, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InputNumber from '../../components/input-number'
import ProductItem from '../../components/product-item'
import { products } from '../../mocks/products'
import './style.css'

function Cart() {
  return (
    <div className='cart-page'>
      <Breadcrumb className='link'>
        <Breadcrumb.Item active>Trang chủ / Giỏ hàng </Breadcrumb.Item>
      </Breadcrumb>

      <Table borderless>
        <thead>
          <tr>
            <th className='trangthai'><input type="checkbox" checked onChange={() => {}} /><span>Trạng thái </span></th>
            <th className='sanpham'>Sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='trangthai'><input type="checkbox" checked onChange={() => {}} /><span className='success'>Còn hàng</span></td>
            <td className='sanpham'>
              <img src="../../assets/images/products/dc596(1).png" alt="" />
              <span className="name">Dây chuyền DC 596</span>
            </td>
            <td className='dongia'>415.000 đ</td>
            <td><InputNumber /></td>
            <td className='tongtien'>415.000 đ </td>
            <td style={{ paddingLeft: '25px' }}><img src="../../assets/images/Trash.svg" alt="" /> </td>
          </tr>

          <tr>
            <td className='trangthai'><input type="checkbox" checked onChange={() => {}} /><span className='success'>Còn hàng</span></td>
            <td className='sanpham'>
              <img src="../../assets/products/balo.png" alt="" />
              <span className="name">Balo nữ BL 100</span>
            </td>
            <td className='dongia'>125.000 đ</td>
            <td><InputNumber number={2} /></td>
            <td className='tongtien'>250.000 đ</td>
            <td style={{ paddingLeft: '25px' }}><img src="../../assets/images/Trash.svg" alt="" /> </td>
          </tr>

          <tr>
            <td className='trangthai'><input type="checkbox" disabled /><span className='fail'>Hết hàng</span></td>
            <td className='sanpham'>
              <img src="../../assets/products/vongtay2.jpg" alt="" />
              <span className="name">Lắc tay LT 620</span>
            </td>
            <td className='dongia'>125.000 đ</td>
            <td><InputNumber /></td>
            <td className='tongtien'>125.000 đ</td>
            <td style={{ paddingLeft: '25px' }}><img src="../../assets/images/Trash.svg" alt="" /> </td>
          </tr>
        </tbody>
      </Table>

      <div className="summery">
        <div>
          <p>Tổng sản phẩm : </p>
          <span>3 </span>
        </div>
        <div>
          <p>Tổng tiền : </p>
          <span>665.000 đ </span>
        </div>
        <Link to='/checkout'>  <button>
          Mua hàng
        </button></Link>
      </div>

      <div className="product">
        <div className="frontgager">
          <p>Sản phẩm đã xem gần đây</p>
          <Link to={'/products'}>Xem thêm</Link>
        </div>
        <Row>
          {products.slice(4, 8).map((product, index) => {
            return <Col xs={3} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>

      <div className="product">
        <div className="frontgager">
          <p>Sản phẩm đã thích gần đây </p>
          <Link to={'/products'}>Xem thêm</Link>
        </div>
        <Row>
          {products.slice(0, 4).map((product, index) => {
            return <Col xs={3} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>
    </div>
  )
}

export default Cart