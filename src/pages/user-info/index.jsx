import React from 'react'
import { Table } from 'react-bootstrap'
import './style.css'

function UserInfo() {
  return (
    <div className='user-info'>
      <div className="header">
        <h3>Hồ sơ của tôi </h3>
        <span>Quản lý thông tin hồ sơ để bảo mật tài khoản </span>
      </div>

      <div className="right">
        <Table borderless>
          <tbody>
            <tr>
              <td>
                <p>Tên đăng nhập: </p>
                <span>Nhatdiepchithu </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Họ tên: </p>
                <input type="text" value="Hadiep" />
              </td>
            </tr>
            <tr>
              <td>
                <p>Email:</p>
                <span>Nhat******thu@gmail.com</span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Số điện thoại:</p>
                <span>088******90 </span>
              </td>
            </tr>
            <tr>
              <td>
                <p>Giới tính: </p>
                <div className="radio">
                  <input type="radio" id="nam" name="sex" value="Nam" />
                  <label for="nam">Nam</label>
                  <input type="radio" id="nu" name="sex" value="Nữ" />
                  <label for="nu">Nữ</label>
                  <input type="radio" id="khac" name="sex" value="Khác" />
                  <label for="khac">Khác</label>
                </div>
              </td>
            </tr>
            <div style={{ textAlign: 'center' }}>
              <button>Lưu thông tin </button>
            </div>
          </tbody>
        </Table>

        <div className="avatar">
          <img src="../../assets/images/user.png" alt="" />
          <span>Dụng lượng file tối đa 1 MB
            Định dạng:.JPEG, .PNG</span>
          <button>Chọn ảnh </button>
        </div>
      </div>
    </div >
  )
}

export default UserInfo