import React from "react";
import "@lottiefiles/lottie-player";

const Banner = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <h1 className=" text-5xl  font-bolder text-center lg:mt-52 ">
            WELCOME TO INNOVATION!
          </h1>
        </div>
        <div>
          {" "}
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_z49WoSvxKM.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Banner;
