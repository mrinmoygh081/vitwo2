import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonial1 from '../assets/images/testimonial-1.jpg';


const Testimonial = () => {
  return(
    <>
      <section className="testimonial-bg py-5">
        <div className="container my-5">
        <h2 className="my-5 text-center heading_style">Review of our happy clients</h2>
          <div className="title mb-4">
                  <h2>Who we Are Overview</h2>
                  <p>About us</p>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>            
                <div className="cnt-box  cnt-box-testimonials-bubble">
                  <p>  
                    The question I ask myself like almost every day is if am I doing the most important thing I could be doing.                   
                  </p>
                  <div className="thumb-bar">
                    <img src={Testimonial1} alt=" " />
                    <p>
                      <span>Mark Zuckerberg</span>
                      <span>Microsoft</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial;