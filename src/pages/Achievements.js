import React from "react";

const Achievements = () => {
  return (
    <div className="my-20 px-5">
      <h1 className="font-semibold my-10 text-3xl text-center ">
        OUR ACHIEVEMENTS
      </h1>

      <div className="flex align-center">
        <div className="lg:mt-20">
          <div className="card card-side my-5 bg-base-100 shadow-xl">
            <figure>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                background="transparent"
                speed="1"
                style={{ height: "60px" }}
                loop
                autoplay
              ></lottie-player>
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                NATIONAL MOBILE APP DEVELOPMENT AWARD-15
              </h2>
              <p>
                Awarded For Live Blood Bank Mobile Application, Category- Health
                & Environment, Position: Runner-up
              </p>
            </div>
          </div>
          <div className="card card-side my-5 bg-base-100 shadow-xl">
            <figure>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_touohxv0.json"
                background="transparent"
                speed="1"
                style={{ height: "60px" }}
                loop
                autoplay
              ></lottie-player>
            </figure>
            <div className="card-body">
              <h2 className="card-title">BEST LIVE STREMING AWARD</h2>
              <p>
                Online Streaming Partnership: Bangladesh ICT Expo-2015 (15 June
                to 17 June) at BICC
              </p>
            </div>
          </div>
        </div>
        <div>
          <lottie-player
            src="https://assets10.lottiefiles.com/private_files/lf30_mksyrgzs.json"
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

export default Achievements;
