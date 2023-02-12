import React from "react";
import Clients from "../../pages/Clients";
import Cobrands from "../../pages/Cobrands";
import Partners from "../../pages/Partners";
import Projects from "../../pages/Projects";
import Photos from "../../pages/Photos.js";

const Home = () => {
  return (
    <div>
      <Projects></Projects>
      <Clients></Clients>
      <Partners></Partners>
      <Photos></Photos>
      <Cobrands></Cobrands>
    </div>
  );
};

export default Home;
