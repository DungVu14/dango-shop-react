import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './style.css';

function Transport() {
  return (
    <Container className='transport-page'>
      <Row>
        <div className="transport-form">
          <h2 className="title">CHÍNH SÁCH VẬN CHUYỂN</h2>
          <h5 className="subtitle">1. CHÍNH SÁCH VẬN CHUYỂN</h5>
          <ul className="body">
            <li>Website của cửa hàng Dango Shop được liên kết đồng bộ với phần mềm bán hàng tại các cửa hàng, cập nhật tự động tình trạng tồn của các sản phẩm tại các cửa hàng giúp quý khách dễ dàng theo dõi được sản phẩm đang còn ở những cửa hàng nào.</li>
            <li>Website được hợp tác tích hợp vận chuyển với hãng vận chuyển J&T express.</li>
            <li>Phí vận chuyển (phí ship) phụ thuộc vào vị trí từ cửa hàng xử lý đơn hàng tới địa chỉ quý khách hàng cùng cân nặng đơn hàng và loại hình dịch vụ ship (ship nhanh, ship thường, và giá ở các hãng vận chuyển) cùng với các chương trình khuyến mãi giảm phí vận chuyển theo thời điểm ... nhân viên xử lý đơn hàng sẽ lại báo lại cụ thể để khách hàng được biết và lựa chọn.</li>
            <li>Quý khách hàng khi đặt hàng qua website, ở bước Đặt hàng sau khi quý khách điền địa chỉ người nhận, website sẽ kết nối tới các hãng vận chuyển và hiển thị ngay phí vận chuyển thấp nhất cho đơn hàng, quý khách hàng có thể thay đổi loại dịch vụ/ hãng vận chuyển ở dòng chọn hãng vận chuyển hoặc khi nhân viên xử lý đơn hàng liên hệ để hoàn thành đơn hàng.</li>
          </ul>
          <h5 className="subtitle">2. DANGO SẼ THU THẬP NHỮNG DỮ LIỆU GÌ?</h5>
          <ul className="body">
            <li>Dữ liệu cá nhân mà DANGO có thể thu thập bao gồm:họ tên; địa chỉ email; ngày sinh; địa chỉ thanh toán và/hoặc giao nhận hàng hóa; tài khoản ngân hàng và thông tin thanh toán; số điện thoại; giới tính;....</li>
            <li>Bạn đồng ý không cung cấp cho chúng tôi bất cứ thông tin nào không chính xác hoặc gây hiểu nhầm và bạn đồng ý sẽ thông báo cho chúng tôi về bất cứ thông tin nào không chính xác hoặc khi có sự thay đổi thông tin. Chúng tôi bảo lưu quyền theo quyết định riêng của chúng tôi được yêu cầu các tài liệu cần thiết khác để xác minh thông tin được bạn cung cấp.</li>
          </ul>
          <h5 className="subtitle">3. CHÚNG TÔI SỬ DỤNG THÔNG TIN BẠN CUNG CẤP CHO CHÚNG TÔI NHƯ THẾ NÀO?</h5>
          <ul className="body">Chúng tôi có thể thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn cho các mục đích sau đây:
            <li>Để xem xét và/hoặc xử lý đơn đăng ký/giao dịch của bạn với chúng tôi hoặc giao dịch hay thư từ của bạn với các bên thứ ba qua các dịch vụ;</li>
            <li>Để quản lý, điều hành, cung cấp và/hoặc quản lý việc bạn sử dụng và/hoặc truy cập các dịch vụ và các Nền tảng của chúng tôi (bao gồm các sở thích của bạn), cũng như quan hệ và tài khoản người dùng của bạn với chúng tôi;</li>
            <li>Để đáp ứng, xử lý, giải quyết hoặc hoàn tất một giao dịch và/hoặc đáp ứng các yêu cầu của bạn đối với các sản phẩm và dịch vụ nhất định và thông báo cho bạn về các vấn đề dịch vụ và các hoạt động tài khoản bất thường;</li>
            <li>Để thực thi các Điều Khoản Dịch Vụ của chúng tôi hoặc bất kỳ thỏa thuận giấy phép người dùng cuối nào áp dụng;</li>
          </ul>
          <h5 className="subtitle">4. BẢO VỆ VÀ LƯU TRỮ THÔNG TIN KHÁCH HÀNG</h5>
          <ul className="body">
            <li>Chúng tôi thực hiện các biện pháp bảo mật khác nhau và luôn nỗ lực để đảm bảo sự an toàn của dữ liệu cá nhân của bạn trên các hệ thống của chúng tôi. Dữ liệu cá nhân của người dùng được lưu trữ đằng sau các mạng bảo mật và chỉ có thể được truy cập bởi một số nhân viên có quyền truy cập đặc biệt đến các hệ thống của chúng tôi. Tuy nhiên, chắc chắn không thể có sự đảm bảo an ninh tuyệt đối.</li>
            <li>Chúng tôi sẽ duy trì dữ liệu cá nhân tuân theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân và/hoặc các điều luật hiện hành khác. Có nghĩa là, chúng tôi sẽ hủy hoặc xóa thông tin nhận dạng ra khỏi dữ liệu cá nhân của bạn khi chúng tôi có lý do hợp lý để xác định rằng (i) việc lưu giữ dữ liệu cá nhân đó không còn phục vụ mục đích thu thập dữ liệu cá nhân đó nữa; (ii) việc lưu giữ không còn cần thiết cho bất kỳ mục đích hợp pháp hay mục đích kinh doanh nào và không còn các lợi ích hợp pháp nào khác để tiếp tục lưu giữ các dữ liệu cá nhân này. Nếu bạn ngưng sử dụng Nền tảng của chúng tôi, hoặc quyền của bạn được sử dụng Nền tảng và/hoặc Các Dịch Vụ bị chấm dứt hoặc hủy bỏ, chúng tôi có thể tiếp tục lưu, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của bạn tuân theo Chính sách bảo mật này và các nghĩa vụ của chúng tôi theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân. Tùy thuộc vào quy định của pháp luật, chúng tôi có thể tiêu hủy dữ liệu cá nhân của bạn một cách an toàn mà không cần thông báo trước cho bạn.</li>
          </ul>
        </div>
      </Row>

    </Container>
  );
}

export default Transport;