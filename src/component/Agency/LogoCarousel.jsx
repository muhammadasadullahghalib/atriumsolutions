import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./LogoCarousel.css";

// Logos array (same as Elementor)
const logos = [
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  "https://template.creativemox.com/webiso/wp-content/uploads/sites/23/2024/06/logo_2.png",
  
];

const LogoCarousel = () => {
  return (
    <div className="logo-carousel-wrapper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={6}
        spaceBetween={70}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 70,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-slide">
              <img src={logo} alt={`logo-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
