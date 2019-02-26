import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      votes: this.state.votes+1
    });
  }

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        
        <Card.Body>
          <span>{this.props.comment.author}</span>
          <Card.Text>
            <span>{this.props.comment.text}</span>
          </Card.Text>
          <Button variant="outline-danger" onClick = {this.onClick}>
            
            <span>Like  {this.state.votes}</span>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};




