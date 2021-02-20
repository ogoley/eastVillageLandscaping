import React from "react";
import SlimNav from "./Assets/components/SlimNav/SlimNav";
import Navi from "./Assets/components/MainNav/Navi";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage, AboutUsPage, } from "./Assets/components/Pages/Pages"
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <SlimNav />
      <Navi />
      <Router>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutUsPage}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
