import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App.js";
import AboutPage from "./AboutPage.js";
import MainTemplate from "./MainTemplate.js";
import Landing from "./components/Landing.js";

const NoMatch = (location) => (
  <div>
    <MainTemplate>
      <h3>
        Page not found :( <code>{location.pathname}</code>
      </h3>
    </MainTemplate>
  </div>
);


export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route path="/app" component={App} />

            <Route path="/about" component={AboutPage} />
            <Route component={NoMatch} />
          </Switch>
        </div>


      </Router>
    );
  }
}
