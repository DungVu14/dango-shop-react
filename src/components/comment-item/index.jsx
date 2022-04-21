import React from 'react'
import Stars from '../stars'
import './style.css'

function CommentItem({ comment }) {
  return (
    <div className='comment-item'>
      <div className="info">
        <img src={comment.avatar} alt="" />
        <span>{comment.name}</span>
      </div>
      <div className='star' style={{ marginBottom: '10px' }}><Stars stars={comment.rating} /></div>
      <span className='time'>{comment.time}</span>
      <span dangerouslySetInnerHTML={{ __html: comment.description }} />
      <div className="images">
        {comment.images.map((item, index) => <img src={item} alt="" key={index} />)}
      </div>
    </div>
  )
}

export default CommentItem
