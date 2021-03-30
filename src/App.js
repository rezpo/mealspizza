import React from "react";
import Home from "./layaouts/Home/Home";
import Order from "./pages/Order/Order";
import Delivery from "./pages/Delivery/Delivery";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";
import "./App.scss";

const advancedMatching = { em: "danrebo@gmail.com" };
const options = {
  autoConfig: true,
  debug: false,
};

function App() {
  ReactPixel.init("1257081238024912", advancedMatching, options);
  ReactPixel.pageView();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order" exact component={Order} />
        <Route path="/delivery" exact component={Delivery} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/menu" exact component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
