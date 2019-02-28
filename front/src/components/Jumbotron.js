import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style/jumbotron.css";
import { Link } from "react-router-dom";

class Jumbo extends Component {
  render() {
    return (
      <div
        className="jumbotron text-center d-flex align-items-center justify-content-center"
        id="header"
      >
        <div>
          <h1>If Dogs Can Talk</h1>
          <p className="lead">The cuttest social app for dogs.</p>
          <p>
            <Link to="/app/new">
              <Button variant="light" size="lg" href="/app/new">
                Add a new post
              </Button>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbo;
