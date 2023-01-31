import React from "react";
import "./codingprofile.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const CodingProfile = () => {
  return (
    <section
      className="testimonial codingprofile conatiner section"
      id="codingprofile"
    >
      <h2 className="section__title">Coding Profile</h2>
      <span className="section__subtitle">Competitive Coding</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, Plink }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name"> {title}</h3>
              <div className="testimonial__link">
                <a href={Plink} target="_blank" rel="noreferrer">
                  <button class="button-62">{title} Profile Link</button>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CodingProfile;
