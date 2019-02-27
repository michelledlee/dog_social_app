import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style/jumbotron.css";

class Jumbo extends Component {
  render() {
    return (    
      <Jumbotron className="Jumbotron">
        <h1>Welcome to dog social app</h1>
        <p>
          The cuttest dog social app for dogs.
        </p>
        <p>
          <Button variant="primary"  href="/app/new">Add new post</Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Jumbo;