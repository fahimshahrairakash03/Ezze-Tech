import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import "@lottiefiles/lottie-player";

const Clients = () => {
  const clients = [
    {
      id: 1,
      img: "https://www.etl.com.bd/assets/images/client/ictdivision-logo.png",
    },
    {
      id: 2,
      img: "https://www.etl.com.bd/assets/images/client/lict-logo.png",
    },
    {
      id: 3,
      img: "https://www.etl.com.bd/assets/images/client/powar-minstry.png",
    },
    {
      id: 4,
      img: "https://www.etl.com.bd/assets/images/client/hi-tech.png",
    },
    {
      id: 5,
      img: "https://www.etl.com.bd/assets/images/client/btcl.png",
    },
    {
      id: 6,
      img: "https://www.etl.com.bd/assets/images/client/a2i.png",
    },
    {
      id: 7,
      img: "https://www.etl.com.bd/assets/images/client/IPDC-logo.png",
    },
    {
      id: 8,
      img: "https://www.etl.com.bd/assets/images/client/prothom-alo.png",
    },
    {
      id: 9,
      img: "https://www.etl.com.bd/assets/images/client/brac.png",
    },
    {
      id: 10,
      img: "https://www.etl.com.bd/assets/images/client/gaan-bangla.png",
    },
    {
      id: 11,
      img: "https://www.etl.com.bd/assets/images/client/daily-star.png",
    },
    {
      id: 12,
      img: "https://www.etl.com.bd/assets/images/client/beatnik.png",
    },
    {
      id: 13,
      img: "https://www.etl.com.bd/assets/images/client/grey.png",
    },
    {
      id: 14,
      img: "https://www.etl.com.bd/assets/images/client/netg5.png",
    },
    {
      id: 15,
      img: "https://www.etl.com.bd/assets/images/client/kcargo-logo.png",
    },
  ];
  return (
    <div className="my-28 lg:px-20 sm:px-5">
      <h1 className="font-semibold my-8 text-3xl text-center ">OUR CLIENTS</h1>

      <Swiper
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {clients.map((client) => (
          <div key={client.id}>
            <SwiperSlide>
              <img src={client.img} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
