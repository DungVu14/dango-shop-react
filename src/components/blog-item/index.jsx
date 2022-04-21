import React from 'react'
import DOMPurify from 'dompurify';
import './style.css'
import { Link } from 'react-router-dom';

function BlogItem({ blog }) {
  const { image_main, title, intro, id } = blog;
  const safeIntro = DOMPurify.sanitize(intro);
  return (
    <div className='blog-item'>
      <Link to={`/blog/${id}`}><img src={image_main} alt="" /></Link>
      <p className='title'>{title}</p>
      <span className='intro' dangerouslySetInnerHTML={{ __html: safeIntro }}></span>
    </div>
  )
}

export default BlogItem
