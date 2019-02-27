import React, { Component } from "react";
import MenuBar from "./MenuBar.js";
import "./style/publishPost.css";
import { Form, TextArea, Button } from "semantic-ui-react";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      breed: "",
      story: ""
    };

    this.handleStory = this.handleStory.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
  }

  handleStory(event) {
    this.setState({ story: event.target.value });
  }
  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleBreed(event) {
    this.setState({ breed: event.target.value });
  }

  postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
  }

  onCreatePost(event) {
    event.preventDefault();

    // Post
    console.log("Send the post");
    this.postData("/api/createNewPost", {
      story: this.state.story,
      name: this.state.name,
      breed: this.state.breed
    }).then(result => {
      this.props.history.push("/app");
    });
  }

  render() {
    console.log("Rendering");

    return (
      <div className="NewPost">
        <MenuBar />
        <br />
        <div className="container">
          <Form
            className="formInPost"
            size="big"
            onSubmit={this.onCreatePost.bind(this)}
          >
            <Form.Field
              width={6}
              label="Name"
              control="input"
              placeholder="The name of your puppy"
              onChange={this.handleName}
              required
            />
            <Form.Field
              width={6}
              label="Breed"
              control="input"
              placeholder="Breed"
              onChange={this.handleBreed}
              required
            />
            <Form.Field
              width={6}
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Type the Story of Your Dogs"
              placeholder="If your dog can speak..."
              onChange={this.handleStory}
              required
            />
            <div className="mb-5">
              <input type="submit" value="Submit" />
            </div>
          </Form>
          <br />
        </div>
      </div>
    );
  }
}

export default NewPost;
