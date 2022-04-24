import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Form, Dropdown, Row, Col, Pagination, Breadcrumb } from 'react-bootstrap';
import Stars from '../../components/stars';
import ProductItem from '../../components/product-item';
import { products } from '../../mocks/products';
import './style.css';
import { useLocation } from 'react-router-dom';

function Products() {
  const isTablet = useMediaQuery({ query: '(max-width: 835px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 415px)' });
  let numsProduct, rangeProduct;
  if (isMobile) {
    numsProduct = 6;
    rangeProduct = 2;
  }
  else if (isTablet) {
    numsProduct = 4;
    rangeProduct = 3; 
  }
  else {
    numsProduct = 3;
    rangeProduct = 4;
  }

  const { state } = useLocation();
  // gia tri nhan duoc khi search 
  let newProducts = [];
  const arrStars = [5, 4, 3, 2, 1];
  const arrPrices = ['Dưới 100k ', '100k-500k ', '500k-800k', 'Trên 1000k'];
  const [drop, setDrop] = useState(' Mặc định')
  const [active, setActive] = useState(1)
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={(e) => handlePagination(e)} >
        {number}
      </Pagination.Item >,
    );
  }
  const handlePagination = ($event) => {
    setActive(+$event.target.innerText)
  }
  const handdleDropDown = ($event) => {
    setDrop($event.target.innerText)
  }
  if (state) {
    newProducts = products.filter(item => item.name.trim().toLowerCase().includes(state.trim().toLowerCase()))
    // loc san pham theo filter 
  } else {
    newProducts = products;
  }

  return (
    <div className='product-list'>
      {state ? (
        // neu dung thi hien danh sach tim kiem, neu khong dung thi k hien 
        <Breadcrumb className='banner'>
          <Breadcrumb.Item active>Trang chủ / Tìm kiếm </Breadcrumb.Item>
        </Breadcrumb>
      ) : (
        <div className="banner">
          <img src="../../assets/images/banner_product.png" alt="" />
        </div>
      )}
      <div className="body">
        <div className="left">
          <h3>Danh mục sản phẩm </h3>
          <p>Phụ kiện thời trang </p>
          <p>Phụ kiện điện thoại </p>
          <p>Quà tặng </p>
          <p>Trang trí nội thất</p>
          <p>Văn phòng phẩm </p>
          <h3>Đánh giá</h3>
          {arrStars.map((value, index) => (
            // lap de hien thi phan danh gia
            <div key={index} className="mb-3">
              <Form.Check
                name='star'
                type={'radio'}
                id={index}
                label={<Stars stars={value} />}
              />
            </div>
          ))}
          <h3>Giá tiền</h3>
          {arrPrices.map((value, index) => (
            <div key={index} className="mb-3">
              <Form.Check
                name='price'
                type={'radio'}
                id={index}
                label={value}
              />
            </div>
          ))}
        </div>
        <div className="right">
          <div className="sort">
            <p className={(state ? 'search' : 'hidden')}>Tìm kiếm "<span>{state}</span>"</p>
            {/* neu tim kiem thi hien thi, neu khong thi an chu tim kiem  */}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                {drop}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => handdleDropDown(e)}>Mặc định</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handdleDropDown(e)}>Bán chạy nhất</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handdleDropDown(e)}>Mới nhất</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handdleDropDown(e)}>Giá từ cao - thấp</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handdleDropDown(e)}>Giá từ thấp - cao</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="list">
            <Row >
              {newProducts.map((product, index) => {
                return <Col xs={numsProduct} key={index} ><ProductItem product={product} /> </Col>
              })}
            </Row>
          </div>

          {!state && (
            // khi khong k search thi hien thi, ngc lai 
            <div className="pagination">
              <Pagination>{items}</Pagination>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}

export default Products;