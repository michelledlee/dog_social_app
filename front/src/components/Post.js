import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0
    };

    this.onClick = this.onClick.bind(this);

    };

  onClick() {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  

  render() {
    const borderColor = ["info", "warning", "danger", "success", "secondary", "primary"];
    let randomIndex = Math.floor(borderColor.length * Math.random());
    let randomBorder = borderColor[randomIndex];

    return (
          <div className="col-md-6 col-lg-4 mb-3">
            <Card border={randomBorder}>
              <Card.Header>{this.props.post.name}</Card.Header>
              <Card.Body>

                <Card.Subtitle className="mb-2 text-muted">
                  {this.props.post.breed}
                </Card.Subtitle>

                <Card.Text>
                  <span>{this.props.post.story}</span>
                </Card.Text>

                <Button variant="outline-danger" onClick={this.onClick}>
                  <span>Like {this.state.votes}</span>
                </Button>
              </Card.Body>
            </Card>
          </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
