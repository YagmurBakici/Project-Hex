import React from "react";
import "./App.css";
import Navbar from "./components/partials/navbar";
import LogIn from "./components/partials/LogIn";
import Admin from "./components/pages/admin";
import Selector from "./components/pages/selector";
import Manufacturer from "./components/partials/manufacturer";
import Size from "./components/partials/size";
import Machine from "./components/partials/machine";
import Comp from "./components/pages/comp";
import "react-bulma-components";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment class="app">
      <header id="header_main">
        <Navbar />
      </header>
      <div class="dropdownlist">
        <Manufacturer />
        <Machine />
        <Size />
      </div>

      <main id="mainbar">
        <div class="boite">
          <Comp
            image="./logo.png"
            name="CMM PRODUCT1"
            Info1="lorem 1"
            Info2="lorem2 "
            Info3="lorem 3"
          />
          <Selector
            image="./logo.png"
            name="CMM PRODUCT2"
            Info1="lorem 1"
            Info2="lorem2 "
            Info3="lorem 3"
          />
        </div>
        <Switch>
          <Route exact path="/" />
          <Route path="/Selector" component={Selector} />
          <Route path="/login" component={LogIn} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </main>
    </React.Fragment>
  );
}
export default App;
