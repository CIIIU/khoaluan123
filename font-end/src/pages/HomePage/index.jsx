import React from 'react'
import PropTypes from 'prop-types'
import '../HomePage/style.scss';
// import ImageProduct from '../assets/images/NewImageProduct.png'
import newImageProduct from '../../assets/images/NewImageProduct.png';



function HomePage(props) {
  return (
    <div style={{
    }} 
      className='wrapper'
    >
      <section className="wrapper__home">
          <div className='wrapper__home__content'>
            <h1>Tân binh mới </h1>
            <h3>Định nghĩa chuẩn mực !</h3>
            <p>Hwatch là website chuyên cung cấp các mẫu đồng hồ thời trang và cao cấp, cam kết chính hãng 100%, đa dạng mẫu mã, phù hợp nhiều phong cách với dịch vụ giao hàng nhanh và chính sách bảo hành uy tín.</p>
            <a href="products" className="wrapper__home__content__button">MUA NGAY</a>
          </div>

          <div className='wrapper__home__image'>
            <div className='wrapper__home__image__rhombus'>
              <img src={newImageProduct} alt="Detroit Watch Model 2"/>
              {/* <img src="https://via.placeholder.com/1920x1080" alt="Car Dealing Experian" /> */}
            </div>
          </div>

          <div className="wrapper__home__rhombus2">

          </div>
        </section>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
