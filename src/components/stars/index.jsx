import React from 'react'
import './style.css'

function Stars({ stars }) {
  return (
    <div>
      {Array.apply(null, Array(5)).map((value, index) => {
        if (index >= stars) {
          return <img src="../../assets/images/nostar.png" alt="" key={index} />
        } else {
          return <img src="../../assets/images/star.png" alt="" key={index} />
        }
      })}
    </div>
  )
}

export default Stars;
