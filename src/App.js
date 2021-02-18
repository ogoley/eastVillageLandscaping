import React from "react";
import Navi from "./Assets/components/MainNav/Navi";
import SlimNav from "./Assets/components/SlimNav/SlimNav";
import ImgCarousel from "./Assets/components/ImgCarousel/ImgCarousel";
import ServicesSmall from "./Assets/components/ServicesSmall/ServicesSmall"
import ContactAndAbout from "./Assets/components/ContactAndAbout/ContactAndAbout"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav/>
      <Navi />
      <ImgCarousel></ImgCarousel>
      <ServicesSmall></ServicesSmall>
      <ContactAndAbout></ContactAndAbout>
    </React.Fragment>
  );
}

export default App;
