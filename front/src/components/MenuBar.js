import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class MenuBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/">Woof:</Navbar.Brand>

          <Nav className="mr-auto">
            <Link to="/app">
              <Nav.Link href="/app">Home</Nav.Link>
            </Link>

            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
