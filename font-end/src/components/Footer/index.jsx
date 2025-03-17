
import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <div className='city'>
          <box-icon name='map' type='solid' ></box-icon>
          <h4>Hà Nội</h4>
        </div>
        <p>219 Nguyễn Ngọc Nại, Thanh Xuân.</p>
        <p>89 Xuân Đỉnh, Bắc Từ Liêm.</p>
      </div>
      <div className="footer__section">
        <div className='city'>
          <box-icon name='map' type='solid' ></box-icon>
          <h4>TP. Hồ Chí Minh</h4>
        </div>
        <p>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</p>
        <p>348 Lê Văn Sỹ, Phường 14, Quận 3.</p>
      </div>
      <div className="footer__section">
        <h4>NAM</h4>
        <p>Đồng hồ nam</p>
        <p>Dây đồng hồ nam</p>
        <p>Trang sức nam</p>
        <p>Quà tặng</p>
        <p>New Arrivals</p>
        <p>Best Sellers</p>
      </div>
      <div className="footer__section">
        <h4>NỮ</h4>
        <p>Đồng hồ nữ</p>
        <p>Dây đồng hồ nữ</p>
        <p>Trang sức nữ</p>
        <p>Quà tặng</p>
        <p>New Arrivals</p>
        <p>Best Sellers</p>
      </div>
      <div className="footer__section">
        <h4>QUÀ TẶNG</h4>
        <p>Cho anh ấy</p>
        <p>Cho bạn</p>
        <p>Cho bố</p>
        <p>Cho cô ấy</p>
        <p>Cho mẹ</p>
        <p>Cho người yêu</p>
      </div>
      <div className="footer__section">
        <h4>VỀ CHÚNG TÔI</h4>
        <p>Về chúng tôi</p>
        <p>Cho doanh nghiệp</p>
        <p>Chính sách đổi trả</p>
        <p>Chính sách vận chuyển</p>
        <p>cskh@curnonwatch.com</p>
        <p>0868889103</p>
        <div className="wrapper__footer__social-media">
        <a style={{ "--i": 1 }} href="https://www.youtube.com/@CurnonWatch"> 
           <box-icon type="logo" name="youtube" color="#000"></box-icon> 
         </a> 
         <a style={{ "--i": 2 }} href="https://www.facebook.com/curnonwatch"> 
           <box-icon 
            type="logo" 
            name="facebook-circle" 
           color="#000" 
           ></box-icon> 
        </a> 
        <a style={{ "--i": 3 }} href="https://www.instagram.com/curnonwatchcom/"> 
          <box-icon type="logo" name="instagram-alt" color="#000"></box-icon> 
        </a> 
      </div> 
      </div> 
      <div className="footer__newsletter"> 
        <h4>Nhận thông tin mới nhất từ HWatch</h4>
        <input type="text" placeholder="Nhập số điện thoại" />
        <input type="text" placeholder="Nhập họ và tên" />
        <input type="email" placeholder="Nhập Email" />
        <button>Đăng ký ngay</button>
      </div>
      <div className="footer__copyright">
        <p>© 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</p>
        <p>Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/01/2018 123C</p>
        <p>Thụy Khuê, Tây Hồ, Hà Nội</p>
      </div>
    </footer>
  );
};

export default Footer;
