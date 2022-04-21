import React from 'react'
import './style.css'

function UserAddress() {
  return (
    <div className='user-address'>
      <div className="header">
        <h3>Địa chỉ của tôi </h3>
        <button>Thêm địa chỉ mới  </button>
      </div>

      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Hạ Diệp</td>
            <td><span className="default">Mặc định</span></td>
          </tr>
          <tr>
            <td>Số điện thoại:</td>
            <td>(+84) 889692690</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', paddingTop: '10px' }}>Địa chỉ: </td>
            <td>
              <p>96 Định Công </p>
              <p>Phường Định Công </p>
              <p>Quận Hoàng Mai </p>
              <p>Hà Nội </p>
            </td>
          </tr>
        </tbody>
        <div className="icon">
          <img src="../../assets/images/edit.svg" alt="" />
          <img src="../../assets/images/trash-2.svg" alt="" style={{ visibility: 'hidden' }} />
        </div>
      </table>

      <table>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Phương Dung</td>
          </tr>
          <tr>
            <td>Số điện thoại:</td>
            <td>(+84) 835478241</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', paddingTop: '10px' }}>Địa chỉ: </td>
            <td>
              <p>17T8 Trung Hòa Nhân Chính</p>
              <p>Phường Nhân Chính</p>
              <p>Quận Thanh Xuân</p>
              <p>Hà Nội </p>
            </td>
          </tr>
        </tbody>
        <div className="icon">
          <img src="../../assets/images/edit.svg" alt="" />
          <img src="../../assets/images/trash-2.svg" alt="" />
          <button>Đặt làm địa chỉ mặc định</button>
        </div>
      </table>

      <table style={{ border: 'none' }}>
        <tbody>
          <tr>
            <td>Họ tên:</td>
            <td>Dung Vũ</td>
          </tr>
          <tr>
            <td>Số điện thoại:</td>
            <td>(+84) 990888666</td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top', paddingTop: '10px' }}>Địa chỉ: </td>
            <td>
              <p>230 Định Công</p>
              <p>Phường Định Công </p>
              <p>Quận Hoàng Mai</p>
              <p>Hà Nội </p>
            </td>
          </tr>
        </tbody>
        <div className="icon">
          <img src="../../assets/images/edit.svg" alt="" />
          <img src="../../assets/images/trash-2.svg" alt="" />
          <button>Đặt làm địa chỉ mặc định</button>
        </div>
      </table>
    </div>
  )
}

export default UserAddress