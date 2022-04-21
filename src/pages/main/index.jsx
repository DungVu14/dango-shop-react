import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import BlogItem from '../../components/blog-item';
import ProductItem from '../../components/product-item';
import { blogs } from '../../mocks/blogs';
import { products } from '../../mocks/products';
import './style.css';

function Main() {
  // logic
  const isTablet = useMediaQuery({ query: '(max-width: 835px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 415px)' });
  let numsProduct, rangeProduct, numsBlog, rangeBlog;
  if (isMobile) {
    numsProduct = 6;
    rangeProduct = 2;
    numsBlog = 12;
    rangeBlog = 1;
  } else if (isTablet) {
    numsProduct = 4;
    rangeProduct = 3;
    numsBlog = 6;
    rangeBlog = 2;
  } else {
    numsProduct = 3;
    rangeProduct = 4;
    numsBlog = 4;
    rangeBlog = 3;
  }

  return (
    // hien thi
    <div className='main-page'>
      <div className="banner">
        <div className="intro">
          <p className='title'>
            <span>Dango</span> mang đến phụ kiện và quà tặng tốt nhất
          </p>
          <p className='slogan'>Chúng tôi sẽ mang đến những phụ kiện và quà tặng hấp dẫn nhất cho cuộc sống của bạn</p>
          <Link to={'/products'}><button>Bắt đầu</button></Link>
        </div>
        <img src="../../assets/images/Group 1281.png" alt="" />
      </div>

      <div className="image-responsive">
        <img src="../../assets/images/Group 1281.png" alt="" />
      </div>

      <div className="banner-responsive">
        <div className="intro">
          <p className='title'>
            <span>Dango</span> mang đến phụ kiện và quà tặng tốt nhất
          </p>
          <p className='slogan'>Chúng tôi sẽ mang đến những phụ kiện và quà tặng hấp dẫn nhất cho cuộc sống của bạn</p>
          <Link to={'/products'}><button>Bắt đầu</button></Link>
        </div>
      </div>

      <div className="services">
        <div className="quantity">
          <img src="../../assets/images/check-square.svg" alt="" />
          <div className="info">
            <h5>Hàng chính hãng</h5>
            <p>Đảm bảo hàng chất lượng</p>
          </div>
        </div>
        <div className="transport">
          <img src="../../assets/images/truck.svg" alt="" />
          <div className="info">
            <h5>Miễn phí vận chuyển</h5>
            <p>Freeship từ đơn 500k</p>
          </div>
        </div>
        <div className="support">
          <img src="../../assets/images/users.svg" alt="" />
          <div className="info">
            <h5>Hỗ trợ 24/7</h5>
            <p>Tư vấn nhiệt tình</p>
          </div>
        </div>
      </div>

      <div className="products-new">
        <div className="frontgager">
          <Link to={'/products'}>Sản phẩm mới nhất</Link>
        </div>
        <Row>
          {products.slice(0, rangeProduct).map((product, index) => {
            // render phan tu tu 0 den so luong phan tu
            return <Col xs={numsProduct} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>


      <div className="sliders">
        <Carousel>
          {/* tao slide anh banner */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/images/slider_1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/images/slider_2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../assets/images/slider_3.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="products-selling">
        <div className="frontgager">
          <Link to={'/products'}>Sản phẩm bán chạy nhất</Link>
        </div>
        <Row>
          {products.slice(4, 4 + rangeProduct).map((product, index) => {
            return <Col xs={numsProduct} key={index}><ProductItem product={product} /> </Col>
          })}
        </Row>
      </div>

      <div className="blog">
        <div className="frontgager">
          <Link to={'/blogs'}>Blog</Link>
        </div>
        <Row>
          {blogs.slice(5, 5 + rangeBlog).map((blog, index) => {
            return <Col xs={numsBlog} key={index}><BlogItem blog={blog} /> </Col>
          })}
        </Row>
      </div>

    </div>
  );
}

export default Main;