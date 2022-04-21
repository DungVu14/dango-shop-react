import React, { useState } from 'react';
import './style.css';
import { blogs } from '../../mocks/blogs'
import { useMediaQuery } from 'react-responsive';
import DOMPurify from 'dompurify';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Blogs() {
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
  const isTablet = useMediaQuery({ query: '(max-width: 835px)' });
  let numsBlog, rangeBlog;
  if (isTablet) {
    numsBlog = 6;
    rangeBlog = 2;
  } else {
    numsBlog = 4;
    rangeBlog = 3;
  }

  return (
    <div className='blog-page'>
      <div className="left">
        {blogs.slice(0, 2).map((blog, index) => <Blog blog={blog} key={index} />)}
        <div className="pagination" style={{ justifyContent: 'center' }}>
          <Pagination>{items}</Pagination>
        </div>
      </div>
      <div className="right">
        <div className="danhmuc">
          Danh mục bài viết
          <ul>
            <li>Phụ kiện điện thoại</li>
            <li>Phụ kiện thời trang</li>
            <li>Quà tặng</li>
            <li>Trang trí nội thất</li>
            <li>Văn phòng phẩm</li>
          </ul>
        </div>
        <div className="baiviet">
          Bài viết gần đây
          {blogs.slice(7, 12).map((blog, index) => {
            return (
              <div key={index} style={{ display: 'flex', marginTop: '25px' }}>
                <Link to={`/blog/${blog.id}`}>
                  <img src={blog.image_main} alt="" style={{ width: '174px', height: '130px' }} />
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '25px' }}>
                  <p className="title" style={{ color: '#161515', fontSize: '18px', lineHeight: '24px' }}>{blog.title}</p>
                  <p className="category" style={{ color: '#000000', fontSize: '14px', lineHeight: '17px', fontWeight: '400' }}>
                    Trong <span style={{ fontWeight: '700' }}>{blog.category}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  );
}

function Blog({ blog }) {
  const safeIntro = DOMPurify.sanitize(blog.intro);
  return (
    <div className='blog'>
      <img src={blog.image_main} alt="" />
      <div className="icon">
        <div className="time">
          <img src="../../assets/images/clock.svg" alt="" />
          <span>{blog.time}</span>
        </div>
        <div className="heart">
          <img src="../../assets/images/heart.svg" alt="" />
        </div>
      </div>
      <p className="title">{blog.title}</p>
      <p className="category">Trong <span>{blog.category}</span></p>
      <p className="intro" dangerouslySetInnerHTML={{ __html: safeIntro }}></p>
      <Link to={`/blog/${blog.id}`}><button>Đọc thêm</button></Link>
    </div>
  )
}

export default Blogs;