import React from 'react'
import { Accordion } from 'react-bootstrap'
import './style.css'

function FAQOrder(props) {
  return (
    <Accordion className='faq-order' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Làm sao để mua hàng trên Dango?</Accordion.Header>
        <Accordion.Body>
          <div>
            <i>Hãy xác định bạn đã đăng nhập vào tài khoản Dango của mình</i>
            <ol className="faq-order-0">Các bước để giúp bạn mua sắm trên Dango một cách nhanh nhất
              <ul className="faq-order-1">
                <li>Lựa chọn sản phẩm mà bạn muốn mua</li>
                <li>Ấn mua ngay để đến giỏ hàng (đã tích sẵn sản phẩm)</li>
                <li>Ấn đặt hàng</li>
                <li>Kiểm tra thông tin địa chỉ nhận hàng, chọn phương thức thanh toán, áp voucher(nếu có)</li>
                <li>Ấn thanh toán và chờ đơn hàng Dango shop duyệt</li>
              </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Thanh toán tối đa 20 phân loại sản phẩm cho mỗi lần mua là gì?</Accordion.Header>
        <Accordion.Body>
          <div>
            <ol className="faq-order-2">1. Phân loại sản phẩm là gì?
              <ul className="faq-order-1">
                <li>Phân loại sản phẩm chính là phân loại hàng của 1 sản phẩm, còn được hiểu là mẫu của sản phẩm.</li>
                <li>Phân loại hàng tạo nhiều lựa chọn khác nhau (về màu sắc, kích thước,mẫu mã,...) cho một sản phẩm, giúp Người mua dễ dàng chọn được loại sản phẩm phù hợp với mong muốn trên cùng 1 trang sản phẩm.</li>
              </ul></ol>
            <ol className="faq-order-2">2. Như vậy là tôi chỉ được mua tối đa 20 sản phẩm của Shop đó?
              <ul className="faq-order-1">
                <li>KHÔNG ĐÚNG, Người mua có thể mua nhiều hơn 20 sản phẩm nhưng chỉ được mua tối đa 20 PHÂN LOẠI SẢN PHẨM. </li></ul>
              <p className="faq-order-1">Ví dụ: Túi giữ nhiệt có 22 mẫu/màu khác nhau:
                <ul>
                  <li>Người mua được mua: số lượng tùy chọn không giới hạn của mỗi mẫu/màu. </li>
                  <li>Người mua bị giới hạn: sẽ chỉ chọn mua được 20 mẫu/màu trong 1 lần thanh toán. </li>
                </ul> </p></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Cần làm gì khi Shop chưa xác nhận đơn?</Accordion.Header>
        <Accordion.Body>
          <div>
            <ol className="faq-order-0">
              <ul className="faq-order-1">
                <li>Chờ Dango shop xử lý đơn trong thời gian tối đa 24h</li>
                <li>Nếu quá 24h chưa thấy Dango xử lý đơn bạn có thể liên hệ shop để tìm hiểu thêm vấn đề</li>
              </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Tôi có thể hủy đơn hàng không?</Accordion.Header>
        <Accordion.Body>
          <div>
            <ol className="faq-order-0">1. Người mua chỉ CÓ thể hủy đơn khi:
              <ul className="faq-order-1">
                <li>Trên hệ thống hiển thị nút Hủy đơn hàng</li>
              </ul></ol>
            <ol className="faq-order-0">2. Người mua KHÔNG thể hủy đơn khi:
              <ul className="faq-order-1">
                <li>Đơn hàng Đang giao</li>
                <li>Hệ thống không còn hiển thị nút Hủy đơn hàng</li>
              </ul></ol>
            <ol className="faq-order-0">3. Thực hiện thao tác hủy đơn trên trang Đơn hàng
              <ul className="faq-order-1">
                <li>Vào trang cá nhân/ vào mục đơn hàng</li>
                <li>Chọn đơn hàng bạn có ý định hủy</li>
                <li>Chọn hủy đơn hàng, xác nhận hủy đơn</li>
                <i>Lưu ý: Khi đã hủy đơn các voucher bạn đã sử dụng không thể hoàn lại</i>
              </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Hướng dẫn kiểm tra trạng thái đơn hàng trên Dango</Accordion.Header>
        <Accordion.Body>
          <div>
            <ol className="faq-order-0">Bạn có thể kiểm tra trạng thái đơn hàng trên website Dango shop tại mục Trang cá nhân/Đơn hàng.
              <ul className="faq-order-1">
                <li>Chờ xác nhận: đơn hàng đang trong giai đoạn xác nhận tính hợp lệ bởi hệ thống</li>
                <li>Chờ lấy hàng: đơn hàng đang được Dango xử lý để giao cho đơn vị vận chuyển</li>
                <li>Đang giao: đơn hàng đang được giao tới Người mua</li>
                <li>Đánh giá: đơn hàng đang chờ được đánh giá sản phẩm</li>
                <li>Đã giao: đơn hàng đã được giao thành công tới Người mua</li>
                <li>Đã hủy: đơn hàng đã được hủy thành công</li>
                <li>Trả hàng: đơn hàng đã được trả hàng thành công</li>
              </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Tại Sao Tôi Không Đặt Hàng Được Trên Dango?</Accordion.Header>
        <Accordion.Body>
          <div>
            <ol className="faq-order-2">Nguyên nhân
              <ul className="faq-order-1">
                <li>Lỗi dịch vụ vận chuyển tại khu vực của bạn đang bị hạn chế /khu phong tỏa...</li>
                <li>Phương thức thanh toán không phù hợp</li>
                <li>Tài khoản chưa xác minh số điện thoại</li>
                <li>Lỗi hệ thống/ lỗi mạng</li>
                <li>Thanh toán hơn 20 phân loại sản phẩm cho mỗi lần mua</li>
                <li>Sản phẩm hết hàng</li>
                <li>Số dư trong ví liên kết không đủ</li>
                <li>Tài khoản của bạn bị khóa</li>
              </ul></ol>
            <ol className="faq-order-2">Hướng giải quyết
              <ul className="faq-order-1">
                <li>Do tình hình dịch bệnh nên hẹn bạn vào dịp khác</li>
                <li>Với người đã 2 lần hủy hàng trên shop thì không thể thanh toán bằng hình thức tiền mặt</li>
                <li>Xác minh tài khoản chính chủ</li>
                <li>Kiểm tra lại kết nối của bạn</li>
                <li>Bạn không thể mua quá 20 phân loại hàng</li>
                <li>Lựa chọn sản phẩm khác</li>
                <li>Kiểm tra lại ví điện tử</li>
                <li>Thực hiện xác minh minh chứng bạn không vi phạm điều khoản của Dango</li>
              </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FAQOrder
