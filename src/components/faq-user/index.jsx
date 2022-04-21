import React from 'react'
import { Accordion } from 'react-bootstrap'
import './style.css'

function FAQUser(props) {
  return (
    <Accordion className='faq-user' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tại sao tôi không thể đăng nhập được vào tài khoản của mình ?</Accordion.Header>
        <Accordion.Body>
          <div>
            <i>Bạn không thể đăng nhập vào tài khoản Dango của mình có thể do một trong những nguyên nhân sau:</i>
            <ol className="faq-user-0">1. Thông tin đăng nhập chưa chính xác 
            <ul className="faq-user-1"> 
              <li>Bạn cần kiểm tra lại thông tin đăng nhập của mình như Tên đăng nhập/ Địa chỉ Email; mật khẩu đăng nhập tương ứng của tài khoản.</li>
              <li>Trong trường hợp không nhớ Mật khẩu, bạn không nên thử đăng nhập quá nhiều lần liên tiếp để tránh tài khoản Dango của mình bị khóa, mà nên tiến hành đặt lại mật khẩu. </li>
            </ul></ol>
            <ol className="faq-user-0">2. Mã xác minh OTP đã hết hiệu lực   
            <ul className="faq-user-1"> 
              <li>Mã xác minh OTP được gửi qua tin nhắn SMS đến số điện thoại liên kết với tài khoản Dango của bạn nhằm mục đích xác minh đăng nhập chỉ có hiệu lực trong vòng 60 giây. Vì vậy, bạn cần đảm bảo mã xác minh OTP được nhập trong thời gian 60 giây từ khi nhận được.</li>
              <li>Trong trường hợp mã xác minh OTP đã hết hiệu lực, bạn sẽ phải yêu cầu gửi lại một mã mới.</li>
            </ul></ol>
            <ol className="faq-user-0">3. Tài khoản của bạn đã bị khóa    
            <ul className="faq-user-1"> 
              <li>Tài khoản gặp vấn đề liên quan đến an toàn bảo mật, ví dụ như hoạt động đăng nhập đáng ngờ hoặc nghi ngờ tài khoản bị xâm nhập trái phép.</li>
              <li>Tài khoản vi phạm các Chính sách của Dango.</li>
              <i>Nếu gặp phải trường hợp này, bạn hãy gửi yêu cầu liên hệ với Dango để giải quyết vấn đề bị khóa. </i>
            </ul></ol>
            <ol className="faq-user-0">4. Lỗi hệ thống     
            <ul className="faq-user-1"> 
              <li>Việc xuất hiện lỗi khi đăng nhập vào tài khoản Dango đôi khi có thể là do xảy ra một số sự cố hệ thống. Nhằm hạn chế tối đa trường hợp này, bạn cần đảm bảo đường truyền mạng ổn định khi đăng nhập.</li>
            </ul></ol>
            <ol className="faq-user-0">5. Không đăng nhập quá 180 ngày      
            <ul className="faq-user-1"> 
              <li>Để đảm bảo an toàn và bảo mật tài khoản, Dango tạm khóa những tài khoản không đăng nhập quá 180 ngày. Để được mở lại tài khoản, vui lòng gửi phiếu yêu cầu kích hoạt tài khoản Dango, shop sẽ phản hồi trong vòng 24H làm việc tiếp theo.</li>
            </ul></ol>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Tại sao tài khoản của tôi bị khóa ?</Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-0">Nguyên nhân  
            <ul className="faq-user-1"> 
              <li>Tạo đơn hàng ảo, đánh giá ảo.</li>
              <li>Lạm dụng mã giảm giá, các chương trình trợ giá hoặc khuyến mãi tại Dango. </li>
              <li>Có các hành vi gian lận, lừa đảo gây ảnh hưởng tiêu cực đến người dùng/ chính sách Dango</li>
              <li>Sử dụng ngôn từ, hình ảnh thô tục trong quá trình mua hàng cũng như khi giao tiếp trên Dango</li>
              <li>Sử dụng tên đăng nhập giống với tên chính thức Dango</li>
            </ul></ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Hướng dẫn thiết lập mật khẩu mới cho tài khoản</Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-0">Trên website Dango shop  
            <ul className="faq-user-1"> 
              <li>Vui lòng đăng nhập vào tài khoản Dango.</li>
              <li>Vào "Tài khoản của tôi" chọn mục "Đổi mật khẩu"</li>
              <li>Nhập mật khẩu hiện tại và mật khẩu mới</li>
            </ul></ol>
          <ol className="faq-user-2"> Lưu ý
          <ul className="faq-user-1"> Mật khẩu đăng nhập Dango của bạn cần bao gồm:
              <li>Tối thiểu 8 ký tự và tối đa 16 ký tự.</li>
              <li>Tối thiểu một chữ in hoa và một chữ thường</li>
            </ul>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Hướng dẫn thay đổi/ xóa địa chỉ giao hàng </Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-0">Trên website Dango shop  
            <ul className="faq-user-1"> 
              <li>Vui lòng đăng nhập vào tài khoản Dango.</li>
              <li>Vào "Tài khoản của tôi" chọn mục "Địa chỉ"</li>
              <li>Chọn thêm địa chỉ mới và nhập thông tin cần thiết</li>
            </ul></ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Tôi có thể đổi tên đăng nhập tài khoản được không ?</Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-0">Bạn chỉ có thể thay đổi tên đăng nhập một lần duy nhẩt  
            <ul className="faq-user-1"> 
              <li>Vui lòng đăng nhập vào tài khoản Dango.</li>
              <li>Vào "Tài khoản của tôi" chọn mục "Hồ sơ của tôi"</li>
              <li>Thay đổi tên đăng nhập, nếu đã thay đổi thì khung tên đăng nhập sẽ hiện cố định không thể thay đổi.</li>
            </ul></ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Cách thay đổi email liên kết với tài khoản </Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-0">Trên website Dango shop  
            <ul className="faq-user-1"> 
              <li>Vui lòng đăng nhập vào tài khoản Dango.</li>
              <li>Vào "Tài khoản của tôi" chọn mục "Hồ sơ của tôi"</li>
              <li>Chọn thay đổi email, nhập mật khẩu của tài khoản</li>
              <li>Vào email bạn vừa thay đổi lấy link xác nhận</li>
            </ul></ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Tôi có thể đặt hàng trên nhiều thiết bị được không ?</Accordion.Header>
        <Accordion.Body>
        <ol className="faq-user-2">Bạn có thể đặt hàng trên nhiều thiết bị với điều kiện sau:
        <ul className="faq-user-1">
          <li>Xác nhận số điện thoại/ email để xác nhận đó chính là tài khoản của bạn</li>
          <li>Có thể mua trên nhiều thiết bị nhưng không thể mua cùng một lúc</li>
          </ul> </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default FAQUser
