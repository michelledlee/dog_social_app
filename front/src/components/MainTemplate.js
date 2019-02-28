import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuBar from "./MenuBar.js";
import "./style/MainTemplate.css";

export default class MainTemplate extends Component {
  render() {
    return (
      <div id="mainTemplate">
        <MenuBar />

        {this.props.children}

        <div className="text-center mt-5 mb-5 bottom">
          <i className="fas fa-dog fa-3x" />
          <br />
          <br />
          <p>Love me? Talk to me</p>
        </div>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
