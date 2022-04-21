import React from 'react'
import { Accordion } from 'react-bootstrap'
import './style.css'

function FAQRefund(props) {
  return (
    <Accordion className='faq-refund' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Làm thế nào để trả hàng về cho Shop?</Accordion.Header>
        <Accordion.Body>
        <div className="faq-refund-0">Các bước trả hàng
        <ol>
          <li className="title">Đóng gói hàng hoàn trả theo quy định</li>
          <ul className="body"> 
            <li>Miễn phí trả hàng</li>
            <li>Chọn một trong các đơn vị vận chuyển sẽ đến lấy hàng hoặc gửi hàng</li>
            <li>Đơn vị vận chuyển đến lấy hàng hoặc chủ động gửi hàng</li>
          </ul>
          <li className="title">In dán phiếu trả hàng hoặc viết tay thông tin trả hàng</li>
          <ul className="body"> 
            <li>Miễn phí trả hàng</li>
            <li>Chọn một trong các đơn vị vận chuyển sẽ đến lấy hàng hoặc gửi hàng</li>
            <li>Đơn vị vận chuyển đến lấy hàng hoặc chủ động gửi hàng</li>
          </ul>
         <li className="title">Chọn 1 trong 3 hình thức trả hàng</li>
         <ul className="body"> 
            <li>Trả hàng tại nhà</li>
            <li>Gửi hàng tại bưu cục</li>
            <li>Tự sắp xếp</li>
          </ul>
        </ol>  
        </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Quy trình trả hàng hoàn tiền</Accordion.Header>
        <Accordion.Body>
          <div className="faq-refund-1">
          <ul className="body1">
            <li>Người mua sẽ không thể gửi yêu cầu Trả hàng/Hoàn tiền sau khi bấm nút  "Đã nhận được hàng" hoặc quá thời gian quy định </li>
            <li>Người mua cần thực hiện các bước Trả hàng/Hoàn tiền đúng hạn.</li>
            <li>Shop sẽ cập nhật tình trạng Trả hàng/Hoàn tiền thường xuyên. </li>
            <li>Shop chưa hỗ trợ các yêu cầu Trả hàng/Hoàn tiền thuộc về cảm quan/không ưng ý/thay đổi quyết định mua hàng</li>
          </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Cách ghi thông tin lên gói hàng cần gửi trả</Accordion.Header>
        <Accordion.Body>
          <div className="faq-refund-2">
            <i className="title">Để đảm bảo gói hàng được trả về đúng địa chỉ của shop, sau khi đóng gói hàng theo quy định, bạn cần in dán phiếu gửi hàng hoặc viết tay trực tiếp lên gói hàng với các thông tin sau:</i>
          <ul className="body2">
            <li>Mã đơn hàng</li>
            <li>Mã yêu cầu trả hàng</li>
            <li>Địa chỉ trả hàng</li>
            <li>Địa chỉ lấy hàng của Người mua</li>   
          </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Điều kiện trả hàng và hoàn tiền</Accordion.Header>
        <Accordion.Body>
          <div className="faq-refund-3">
          <ol>
            <li className="title3">Thời gian yêu cầu trả hàng/hoàn tiền</li>
            <ul className="body3">
              <li >Bạn có thể gửi yêu cầu Trả hàng/Hoàn tiền trong vòng 7 ngày từ lúc đơn hàng được cập nhật giao hàng thành công</li>
            </ul>           
            <li className="title3"> Lý do trả hàng/hoàn tiền</li>
            <ul className="body3">
              <li>Hàng nhận được bị thiếu/sai/bể vỡ/không hoạt động/khác mô tả/đã qua sử dụng/giả nhái</li>
              <li>Chưa nhận được hàng nhưng Shipper đã cập nhật giao hàng thành công</li>
              <li>Chưa nhận được hàng sau thời gian giao hàng dự kiến</li>
            </ul>
            <li className="title3">Bằng chứng cần cung cấp</li>
            <ul className="body3">
              <li>Bằng chứng bạn cung cấp bị mờ, nhòe, không thể hiện được tình trạng sản phẩm nhận được</li>
              <li>Người bán khiếu nại yêu cầu của bạn và cần thêm bằng chứng để xem xét</li>
            </ul>
            <li className="title3">Tình trạng của hàng trả lại </li>   
            <ul className="body3">
              <li>Gửi trả toàn bộ sản phẩm (bao gồm tất cả phụ kiện đi kèm, hóa đơn VAT, tem phiếu bảo hành... nếu có)</li>
              <li>Sản phẩm gửi trả phải trong tình trạng như khi nhận hàng</li>
            </ul>
          </ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FAQRefund
