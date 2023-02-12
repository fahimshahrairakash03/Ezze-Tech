import React from "react";
import "@lottiefiles/lottie-player";

const Services = () => {
  return (
    <div className="my-20 px-5">
      <h1 className="font-semibold my-10 text-3xl text-center ">WHAT WE DO</h1>

      <div className="grid gap-7 lg:grid-cols-2 ">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_myejiggj.json"
              background="transparent"
              speed="1"
              style={{ height: "60px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Web Development</h2>
            <p>
              Ezze Technology Ltd. offers web solutions which tend to be
              effective tools of marketing and ensure return on investments.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_80nu1g6c.json"
              background="transparent"
              speed="1"
              style={{ height: "60px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Digital Marketing</h2>
            <p>
              Digital Marketing is driving the society to a phase which creates
              new ways of thinking, interrelationships and global awareness.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_uewt8rjj.json"
              background="transparent"
              speed="1"
              style={{ height: "100px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Live Streming</h2>
            <p>
              Live Streaming video is content that sent in compressed form over
              the Internet and displayed by the viewer in real time.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json"
              background="transparent"
              speed="1"
              style={{ height: "150px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Apps Development</h2>
            <p>
              Ezze Technology Ltd. provides wide assortment of services for
              mobile applications and developments which makes the transition of
              your company into the online world as smooth as possible.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_CHJzGf.json"
              background="transparent"
              speed="1"
              style={{ height: "60px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Domain & Hosting</h2>
            <p>
              Ezze Technology Ltd. realizes that now a day’s everyone needs an
              online presence, regardless of their line of business or technical
              expertise.
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_TdfPXB1To4.json"
              background="transparent"
              speed="1"
              style={{ height: "60px" }}
              loop
              autoplay
            ></lottie-player>
          </figure>
          <div className="card-body">
            <h2 className="card-title">E-Business Solution</h2>
            <p>
              Ezze Technology Ltd. brings a package program that lets you build,
              customize, and run an online store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
