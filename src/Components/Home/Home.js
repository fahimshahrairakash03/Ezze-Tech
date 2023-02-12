import React from "react";
import Clients from "../../pages/Clients";
import Cobrands from "../../pages/Cobrands";
import Partners from "../../pages/Partners";
import Projects from "../../pages/Projects";
import Photos from "../../pages/Photos.js";
import Banner from "../../pages/Banner";
import Services from "../../pages/Services";
import Achievements from "../../pages/Achievements";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Services></Services>
      <Achievements></Achievements>
      <Clients></Clients>
      <Partners></Partners>
      <Photos></Photos>
      <Cobrands></Cobrands>
    </div>
  );
};

export default Home;
