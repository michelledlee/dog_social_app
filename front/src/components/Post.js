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

  getVotes() {
    fetch("/api/getVotes")
      .then(res => res.json())
      .then(data => {
        this.setState({
          votes: data.votes
        });
      });
  }

  postData(url, data) {  
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
  }

  updateVotes(event) {
    event.preventDefault();

    console.log("Update the votes");

    this.postData("/api/updateVotes", {
      votes: this.state.votes
    });
  }
  

  render() {
    const borderColor = ["info", "warning", "danger", "success", "secondary", "primary"];
    let randomIndex = Math.floor(borderColor.length * Math.random());
    let randomBorder = borderColor[randomIndex];

    return (
         
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
       
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
