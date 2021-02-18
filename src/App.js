import React from "react";
import Navi from "./Assets/Components/Navi";
import SlimNav from "./Assets/Components/SlimNav";
import ImgSpin from "./Assets/Components/ImgSpin";
import ServicesSmall from "./Assets/Components/ServicesSmall"
import ContactAndAbout from "./Assets/Components/ContactAndAbout"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav/>
      <Navi />
      <ImgSpin></ImgSpin>
      <ServicesSmall></ServicesSmall>
      <ContactAndAbout></ContactAndAbout>
    </React.Fragment>
  );
}

export default App;
