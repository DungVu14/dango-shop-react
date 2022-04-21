import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductItem from '../../components/product-item'
import { products } from '../../mocks/products'
import './style.css'

function UserProducts() {
  return (
    <div className='user-products'>
      <div className="header">
        <h3>Sản phẩm yêu thích</h3>
      </div>

      <div className="content">
        <Row >
          {products.slice(0, 8).map((product, index) => {
            return <Col xs={3} key={index} ><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>
    </div>
  )
}

export default UserProducts