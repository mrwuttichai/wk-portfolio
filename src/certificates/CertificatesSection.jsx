import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";

import Jsd4 from "../assets/jsd4.jpg";
import LearnJavaScriptCourse from "../assets/LearnJavaScriptCourse.png"
import LearnHowtoCode from "../assets/LearnHowtoCode.png";
import LawforBusiness from "../assets/LawforBusiness.jpg";

export default function CertificatesSection() {


  // Inesrt your certificate below.

  const certificates = [
    Jsd4,
    LearnJavaScriptCourse,
    LearnHowtoCode,
    LawforBusiness,
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
