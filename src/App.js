import React from "react";
import Navi from "./Assets/components/MainNav/Navi";
import SlimNav from "./Assets/components/SlimNav/SlimNav";
import ImgCarousel from "./Assets/components/ImgCarousel/ImgCarousel";
import ServicesSmall from "./Assets/components/ServicesSmall/ServicesSmall";
import ContactAndAbout from "./Assets/components/ContactAndAbout/ContactAndAbout";
import ChooseUs from "./Assets/components/ChooseUs/ChooseUs";
import Footer from "./Assets/components/Footer/Footer"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav />
      <Navi />
      <ImgCarousel></ImgCarousel>
      <ServicesSmall></ServicesSmall>
      <ContactAndAbout></ContactAndAbout>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
