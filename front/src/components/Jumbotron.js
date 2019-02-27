import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style/jumbotron.css";

class Jumbo extends Component {
  render() {
    return (
      <div
        className="jumbotron text-center d-flex align-items-center justify-content-center"
        id="header"
      >
        <div>
          <h1>If Dogs Can Speak</h1>
          <p className="lead">The cuttest social app for dogs.</p>
          <p>
            <Button variant="light" size="lg" href="/app/new">
              Add a new post
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbo;
