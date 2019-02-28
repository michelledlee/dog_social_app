import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./style/landing.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/">
              Signup <i className="fa fa-user-plus" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">
              Login <i className="fa fa-user" />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="content">
          <h1>If Dogs Can Talk</h1>
          <h3>The Cutties Social App for Dogs</h3>
          <hr />
        </div>
        <div className="woof">
          <Link to="/app">
            <Button variant="light" size="lg">
              <i className="fas fa-dog"> : woof</i>
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
