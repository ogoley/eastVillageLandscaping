import React from "react";
import Navi from "./Assets/Components/Navi";
import SlimNav from "./Assets/Components/SlimNav";
import ImgSpin from "./Assets/Components/ImgSpin";
import ServicesSmall from "./Assets/Components/ServicesSmall"
import AboutUsSmall from "./Assets/Components/AboutUsSmall"
import ParallaxTest from "./Assets/Components/ParallaxTest"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav/>
      <Navi />
      <ImgSpin></ImgSpin>
      <ServicesSmall></ServicesSmall>
      <ParallaxTest></ParallaxTest>
      <AboutUsSmall></AboutUsSmall>
    </React.Fragment>
  );
}

export default App;
