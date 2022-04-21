import React from 'react'
import { Link } from 'react-router-dom'
import { blogs } from '../../mocks/blogs'
import './style.css'

function UserBlogs() {
  return (
    <div className='user-blogs'>
      <div className="header">
        <h3>Bài viết yêu thích</h3>
      </div>

      <div className="content">
        {blogs.slice(0, 8).map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/blog/${item.id}`}>
                <img src={item.image_main} alt="" />
              </Link>
              <h3>{item.title}</h3>
              <p>Trong <span>{item.category}</span></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UserBlogs