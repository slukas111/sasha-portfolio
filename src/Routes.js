import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./App";



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
        </Fragment>
      </Router>
    );
  }
}

export default Routes;