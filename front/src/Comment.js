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
        <Card.Img variant="top" src="holder.js/100px180" />
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

     /*
      <div className="Comment col-4">
        <button className="btn btn-info"
          onClick = {this.onClick}>
          <span role="img" aria-label="vote for this comment">👍</span>
        </button>
        &nbsp;&nbsp;
        <span>{this.state.votes}</span>
        &nbsp;&nbsp;
        <span>{this.props.comment.author}</span>
        &nbsp;&nbsp;
        <span>{this.props.comment.text}</span>
      </div>*/
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};




