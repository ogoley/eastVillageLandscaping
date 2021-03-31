import React from "react";
import SlimNav from "./Assets/components/SlimNav/SlimNav";
import Navi from "./Assets/components/MainNav/Navi";
import Footer from "./Assets/components/Footer/Footer"
import { Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage, AboutUsPage, ServicesPage } from "./Assets/components/Pages/Pages"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav />
      <Navi />
      <Router>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutUsPage}/>
        <Route path='/services' exact component={ServicesPage}/>
      </Router>
      <Footer></Footer>

    </React.Fragment>
  );
}

export default App;
