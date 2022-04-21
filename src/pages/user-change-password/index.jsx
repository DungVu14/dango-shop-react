import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function UserChangePassword() {
  return (
    <div className='user-change-password'>
      <div className="header">
        <h3>Đổi mật khẩu</h3>
        <span>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
      </div>
      <div className="content">
        <span>Mật khẩu hiện tại: </span>
        <input type="text" />
        <Link to='/forgot-password'>Quên mật khẩu ?</Link>
        <br />
        <span>Mật khẩu mới: </span>
        <input type="text" />
        <br />
        <span>Xác nhận lại mật khẩu: </span>
        <input type="text" />
        <br />
        <button>Xác nhận</button>
      </div>
    </div>
  )
}

export default UserChangePassword