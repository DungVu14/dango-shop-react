import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { blogs } from '../../mocks/blogs';
import DOMPurify from 'dompurify';
import './style.css'

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(item => item.id === +id);
  const safeContent_1 = DOMPurify.sanitize(blog.content_1);
  const safeContent_2 = DOMPurify.sanitize(blog.content_2);
  return (
    <div className='blog-detail'>
      <Breadcrumb className='link'>
        <Breadcrumb.Item active>Blog / Danh mục bài viết</Breadcrumb.Item>
        <Breadcrumb.Item active>{blog.category}</Breadcrumb.Item>
      </Breadcrumb>

      <img src={blog.image_main} alt="" className="main-image" />
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

      <div dangerouslySetInnerHTML={{ __html: safeContent_1 }} className="content_1"></div>
      {/* render tu DOMpurify  */}

      <div className="content">
        <div className="left">
          <div dangerouslySetInnerHTML={{ __html: safeContent_2 }} className="content_2"></div>
        </div>
        <div className="right">
          <p>Bài viết tương tự</p>
          {blogs.slice(2, 6).map((blog, index) => {
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
  )
}


export default BlogDetail
