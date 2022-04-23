import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Breadcrumb, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import InputNumber from '../../components/input-number';
import Stars from '../../components/stars';
import { products } from '../../mocks/products';
import DOMPurify from 'dompurify';
import './style.css';
import CommentItem from '../../components/comment-item';
import ProductItem from '../../components/product-item';

function ProductDetai() {
  const { id } = useParams();
  const product = products.find(item => item.id === +id);
  // find: tim 1 gia tri dau tien, tim gia tri dau tien theo id 
  const safeDescription = DOMPurify.sanitize(product.description);
  // chuyen tat ca ve html de chong ma doc 
  const isTablet = useMediaQuery({ query: '(max-width: 835px)' });
  let numsProduct, rangeProduct;
  if (isTablet) {
    numsProduct = 4;
    rangeProduct = 3;
  } else {
    numsProduct = 3;
    rangeProduct = 4;
  }

  return (
    <div className='product-detail'>
      <Breadcrumb className='link'>
        <Breadcrumb.Item active>Sản phẩm</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="intro">
        <div className="gallery">
          <div className="image">
            <img src={product.image} alt="" />
          </div>

          <div className="images">
            {product.images.map((item, index) => <img src={item} alt="" key={index} />)}
          </div>
        </div>

        <div className="info">
          <p className="name">{product.name}</p>

          <div className="starAndLike">
            <Stars stars={product.rating} />
            <p><img src="../../assets/images/heart.svg" alt="" />Đã thích ({product.liked})</p>
          </div>

          <div className="price">
            <p className="newPrice">{product.price}</p>
            <p className="priceBefore">{product.priceBefore}</p>
          </div>

          <div className="transport">
            <span>Vận chuyển</span>
            <div>
              <div className="truck">
                <img src="../../assets/images/truck (1).svg" alt="" />
                <p>Miễn phí vận chuyển đơn từ 500.000đ</p>
              </div>
              <div className="repeat">
                <img src="../../assets/images/repeat.svg" alt="" />
                <p>Đổi trả trong vòng 24h</p>
              </div>
            </div>
          </div>

          <div className="quantity">
            <span className="sl">Số lượng</span>
            <InputNumber />
            <span className="cs">{`${product.countInStock} sản phẩm có sẵn`}</span>
          </div>

          <div className="button-group">
            <Link to={'/cart'}><button className="add-to-cart">Thêm vào giỏ hàng</button></Link>
            <Link to={'/checkout'}><button className="buy-now">Mua ngay</button></Link>
          </div>
        </div>
      </div>

      <div className="detail">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className='mb-4'>
          <Tab eventKey="home" title="Chi tiết sản phẩm">
            <div className="chitiet">
              <table>
                <tbody>
                  <tr>
                    <td>Danh mục </td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Phong cách</td>
                    <td>{product.style}</td>
                  </tr>
                  <tr>
                    <td>Xuất xứ</td>
                    <td>{product.origin}</td>
                  </tr>
                  <tr>
                    <td>Chất liệu</td>
                    <td>{product.fabric}</td>
                  </tr>
                  <tr>
                    <td>Kho hàng</td>
                    <td>{product.countInStock}</td>
                  </tr>
                  <tr>
                    <td>Giới tính</td>
                    <td>{product.sex}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Mô tả sản phẩm">
            <div className="mota" style={{ marginLeft: '30px', marginRight: '30px' }}>
              <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
            </div>
          </Tab>
          <Tab eventKey="contact" title="Đánh giá sản phẩm">
            <div className="danhgia" style={{ marginLeft: '100px' }}>
              {product.evaluation.map((comment, index) => <CommentItem comment={comment} key={index} />)}
            </div>
          </Tab>
        </Tabs>
      </div>

      <div className="product-example">
        <div className="frontgager">
          <h3>Sản phẩm tương tự </h3>
          <Link to={'/products'}>Xem thêm</Link>
        </div>
        <Row>
          {products.slice(0, rangeProduct).map((product, index) => {
            return <Col xs={numsProduct} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>
      <div className="product-example">
        <div className="frontgager">
          <h3>Sản phẩm đã xem gần đây </h3>
          <Link to={'/products'}>Xem thêm</Link>
        </div>
        <Row>
          {products.slice(0, rangeProduct).map((product, index) => {
            return <Col xs={numsProduct} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>
      <div className="product-example">
        <div className="frontgager">
          <h3>Có thể bạn cũng thích</h3>
          <Link to={'/products'}>Xem thêm</Link>
        </div>
        <Row>
          {products.slice(0, rangeProduct).map((product, index) => {
            return <Col xs={numsProduct} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>

    </div>
  )
}

export default ProductDetai
