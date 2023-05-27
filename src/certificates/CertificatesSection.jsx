import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import LearnHowtoCode from "../assets/LearnHowtoCode.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";

export default function CertificatesSection() {


  // Inesrt your certificate below.

  const certificates = [
    "https://global.discourse-cdn.com/codecademy/original/5X/c/6/6/7/c667131d7a9516b92231e95797ddd6caebf41f52.jpeg",
    "https://www.alphaacademy.org/wp-content/uploads/2022/10/Alpha-Certificate-2022.jpg",
    "https://static.semrush.com/academy/certificates/dff5973e4f/oldcoderbd_2.png",
    "https://i.pinimg.com/originals/ef/ea/1e/efea1eaf53b2380cf73e8ff3908f3c0e.png",
    "https://strategylab3.files.wordpress.com/2013/03/example1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfURiC7-NxZf7NngMWkvICsakQjd9F3IAdmw&usqp=CAU"
  ];


  // ============================================================================



  const [showNavigation, setShowNavigation] = useState(false);

  const handleMouseEnter = () => {
    setShowNavigation(true);
  };

  const handleMouseLeave = () => {
    setShowNavigation(false);
  };

  return (
    <div className="pt-40 pb-10" id="certificates">
      <div>
        <Marquee className="py-4">
          <span className="text-7xl font-bold uppercase px-10">Certificates</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Certificates</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Certificates</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
          <span className="text-7xl font-bold uppercase px-10">Certificates</span>
          <span className="text-7xl font-bold uppercase px-10">&#x2022;</span>
        </Marquee>
      </div>
      <div
        className="pt-10 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          navigation={showNavigation}
        >
          {certificates.map(cert => (
            <SwiperSlide key={cert}>
                <div className="w-full flex items-center justify-center">
                  <img
                    className="object-contain h-full w-full"
                    src={cert}
                    alt="Certificate"
                  />
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
