import React from "react";
import "./Photos.css";

const Photos = () => {
  const photos = [
    {
      id: 1,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s1.png",
    },
    {
      id: 2,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s2.jpg",
    },
    {
      id: 3,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s3.jpg",
    },
    {
      id: 4,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s4.jpg",
    },
    {
      id: 5,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s5.jpg",
    },
    {
      id: 6,
      img: "https://www.etl.com.bd/assets/images/gallery/s/etl_7.jpg",
    },
    {
      id: 7,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s6.jpg",
    },
    {
      id: 8,
      img: "https://www.etl.com.bd/assets/images/gallery/s/s8.jpg",
    },
  ];
  return (
    <div className="my-28 ">
      <h1 className="font-semibold my-8 text-3xl text-center ">PHOTO STREAM</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              className="team_img"
              style={{ height: "250px" }}
              src={photo.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
