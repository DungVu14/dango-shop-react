import React from 'react'
import { Accordion } from 'react-bootstrap'
import './style.css'

function FAQPolicy(props) {
  return (
    <Accordion className='faq-policy' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Những nguyên nhân khóa / xóa sản phẩm liên quan thông tin rác hoặc spam từ khóa</Accordion.Header>
        <Accordion.Body>
         <div className="faq-policy-0">
           <ol>
             <li className="title">Những lý do sản phẩm bị khóa</li>
             <ul className="body">
               <li>Sản phẩm có mức giá chưa phù hợp</li>
               <li>Tên sản phẩm chứa các thương hiệu không liên quan</li>
               <li>Ngôn ngữ thô tục, không phù hợp</li>
             </ul>
             <li className="title">Những lý do sản phẩm bị xóa</li>
             <ul className="body">
               <li>Một sản phẩm đăng trên nhiều tài khoản</li>
               <li>Chênh lệch giá giữa các phân loại hàng quá 5 lần</li>
               <li>Ngôn ngữ thô tục, không phù hợp</li>
             </ul>
           </ol>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cách thức báo cáo các hành vi xâm phạm Quyền Sở Hữu Trí Tuệ</Accordion.Header>
        <Accordion.Body>
          <div className="faq-policy-1">
            <ol>
              <li className="title1">Các hành vi xâm phạm Quyền Sở Hữu Trí Tuệ là gì?</li>
              <ul className="body1">
               <li>Vi phạm nhãn hiệu</li>
               <li>Vi phạm bản quyền</li>
               <li>Vi phạm kiểu dáng công nghiệp</li>
             </ul>
              <li className="title1">Khi phát hiện ra các hành vi xâm phạm Quyền Sở Hữu Trí Tuệ, người bán sẽ báo cáo như thế nào?</li>
              <ul className="body1">
               <li>Điền vào mẫu khiếu nại</li>
               <li>Đính kèm thêm đầy đủ các tài liệu hợp lệ chứng minh quyền sở hữu trí tuệ và chứng cứ</li>
               <li>Gửi các thông tin trên đến Shop trực tiếp </li>
             </ul>
            </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Chính sách bảo hành của Shop</Accordion.Header>
        <Accordion.Body>
          <div className="faq-policy-2">
            <ol>
              <li className="title2">Điều kiện bảo hành</li>
              <ul className="body2">
               <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất</li>
               <li>Còn trong thời hạn bảo hành</li>
               <li>Có hóa đơn điện tử</li>
             </ul>
              <li className="title2">Thời hạn bảo hành</li>
              <ul className="body2">
               <li>Thời hạn bảo hành được tính kể từ ngày mua hàng hoặc ngày nhận được sản phẩm, tùy theo từng sản phẩm của từng nhà sản xuất khác nhau.</li>
               <li>Đối với sản phẩm bảo hành điện tử, thời hạn bảo hành được tính từ thời điểm kích hoạt bảo hành điện tử</li>
             </ul>
            </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Gói miễn phí vận chuyển</Accordion.Header>
        <Accordion.Body>
          <div className="faq-policy-3">
            <ol>
              <li className="title3">Tôi phải trả các loại phí nào cho Shop</li>
              <ul className="body3">
               <li>Sản phẩm bị lỗi kỹ thuật do nhà sản xuất</li>
               <li>Còn trong thời hạn bảo hành</li>
               <li>Có hóa đơn điện tử</li>
             </ul>
              <li className="title3">Làm sao để thanh toán cho Shop các loại phí liên quan đến Gói Freeship</li>
              <ul className="body3">
               <li>Thời hạn bảo hành được tính kể từ ngày mua hàng hoặc ngày nhận được sản phẩm, tùy theo từng sản phẩm của từng nhà sản xuất khác nhau.</li>
               <li>Đối với sản phẩm bảo hành điện tử, thời hạn bảo hành được tính từ thời điểm kích hoạt bảo hành điện tử</li>
             </ul>
             <li className="title3">Làm thế nào để hủy Gói Freeship</li>
              <ul className="body3">
               <li>Thời hạn bảo hành được tính kể từ ngày mua hàng hoặc ngày nhận được sản phẩm, tùy theo từng sản phẩm của từng nhà sản xuất khác nhau.</li>
               <li>Đối với sản phẩm bảo hành điện tử, thời hạn bảo hành được tính từ thời điểm kích hoạt bảo hành điện tử</li>
             </ul>
            </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FAQPolicy
