import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

const Partners = () => {
  const partners = [
    {
      id: 1,
      img: "https://www.etl.com.bd/assets/images/partners/bcc.png",
    },
    {
      id: 2,
      img: "https://www.etl.com.bd/assets/images/partners/Narcotics-logo.png",
    },
    {
      id: 3,
      img: "https://www.etl.com.bd/assets/images/partners/bacco.png",
    },
    {
      id: 4,
      img: "https://www.etl.com.bd/assets/images/partners/e-cab.png",
    },
    {
      id: 5,
      img: "https://www.etl.com.bd/assets/images/partners/aamra.png",
    },
    {
      id: 6,
      img: "https://www.etl.com.bd/assets/images/partners/basis-new.png",
    },
    {
      id: 7,
      img: "https://www.etl.com.bd/assets/images/partners/bicc.png",
    },
    {
      id: 8,
      img: "https://www.etl.com.bd/assets/images/partners/bcs.png",
    },
    {
      id: 9,
      img: "https://www.etl.com.bd/assets/images/partners/iccb.png",
    },
    {
      id: 10,
      img: "https://www.etl.com.bd/assets/images/partners/dcci_logo.png",
    },
    {
      id: 11,
      img: "https://www.etl.com.bd/assets/images/partners/panpacific.png",
    },
    {
      id: 12,
      img: "https://www.etl.com.bd/assets/images/partners/radisson.png",
    },
    {
      id: 13,
      img: "https://www.etl.com.bd/assets/images/partners/gigabyte.png",
    },
    {
      id: 14,
      img: "https://www.etl.com.bd/assets/images/partners/lenovo.png",
    },
    {
      id: 15,
      img: "https://www.etl.com.bd/assets/images/partners/samsung.png",
    },
  ];
  return (
    <div>
      <div className="my-28 lg:px-20 sm:px-5">
        <h1 className="font-semibold my-8 text-3xl text-center ">
          OUR PARTNERS
        </h1>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {partners.map((partner) => (
            <div key={partner.id}>
              <SwiperSlide>
                <img src={partner.img} alt="" />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
