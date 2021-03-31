import Navi from "../MainNav/Navi";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import ServicesSmall from "../ServicesSmall/ServicesSmall";
import ContactAndAbout from "../ContactAndAbout/ContactAndAbout";
import ChooseUs from "../ChooseUs/ChooseUs";
import Footer from "../Footer/Footer";
import AboutUs from '../AboutUsMain/AboutUsMain'
import ContactAndMap from '../ContactAndMap/ContactAndMap'
import Services from '../Services/Services'
import Title from '../Title/Title'

import React from "react";

function HomePage() {
  return (
    <>
      <ImgCarousel></ImgCarousel>
      <ServicesSmall></ServicesSmall>
      <ContactAndAbout></ContactAndAbout>
      <ChooseUs></ChooseUs>

    </>
  );
}

function AboutUsPage() {
  return <>
    <AboutUs></AboutUs>
    <ContactAndMap></ContactAndMap>
    <ChooseUs></ChooseUs>

  </>;
}

function ServicesPage() {
  return <>
    <Services></Services>
  </>;
}

export { HomePage, AboutUsPage, ServicesPage };
