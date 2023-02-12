import React from "react";

const Cobrands = () => {
  const brands = [
    {
      id: 1,
      img: "https://www.etl.com.bd/assets/images/brand/dhakalive.png",
    },
    {
      id: 2,
      img: "https://www.etl.com.bd/assets/images/brand/itbazaar.png",
    },
    {
      id: 3,
      img: "https://www.etl.com.bd/assets/images/brand/techjobs.com.bd.png",
    },
    {
      id: 4,
      img: "https://www.etl.com.bd/assets/images/brand/etlcampus.png",
    },
  ];
  return (
    <div className="my-20 px-10">
      <h1 className="font-semibold my-8 text-3xl ">CO - BRANDS</h1>

      <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={brand.img} alt="" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cobrands;
