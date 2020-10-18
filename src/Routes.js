import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Backend from "./components/Projects/Backend";
import Frontend from "./components/Projects/Frontend";
import Sketch from "./components/Projects/Sketch";



class Routes extends Component {
  render() {
    if (window.innerWidth > 3000) {
      alert(
        "Hello user, please use a device with a lesser viewport for a better experience. Sorry for the incovenience!"
      );
      return <div style={{ display: "none" }} />;
    }
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={App} />

          <Route exact path="/frontend" component={Frontend} />
          <Route exact path="/backend" component={Backend} />
          <Route exact path="/sketch" component={Sketch} />
        </Fragment>
      </Router>
    );
  }
}

export default Routes;