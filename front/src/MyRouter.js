import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App.js";
import AboutPage from "./components/About.js";
import MainTemplate from "./components/MainTemplate.js";
import Landing from "./components/Landing.js";
import NewPost from "./components/NewPost.js";

const NoMatch = location => (
  <div>
    <MainTemplate>
      <h3>
        Page not found :( <code>{location.pathname}</code>
      </h3>
    </MainTemplate>
  </div>
);

class MyRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route exact path="/app" component={App} />
            <Route exact path="/app/new" component={NewPost} />

            <Route path="/about" component={AboutPage} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MyRouter;
