import Navi from "../MainNav/Navi";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import ServicesSmall from "../ServicesSmall/ServicesSmall";
import ContactAndAbout from "../ContactAndAbout/ContactAndAbout";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import AboutUs from '../AboutUsMain/AboutUsMain'
import ContactAndMap from '../ContactAndMap/ContactAndMap'

import React from "react";

function HomePage() {
  return (
    <>
      <ImgCarousel></ImgCarousel>
      <ServicesSmall></ServicesSmall>
      <ContactAndAbout></ContactAndAbout>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </>
  );
}

function AboutUsPage() {
  return <>
    <AboutUs></AboutUs>
    <ContactAndMap></ContactAndMap>
    <ChooseUs></ChooseUs>
    <Footer></Footer>
  </>;
}

export { HomePage, AboutUsPage };
