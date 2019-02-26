import React, { Component } from "react";
import MainTemplate from "./MainTemplate.js";

class NewPost extends Component {
  constructor(props) {
    super(props);


    this.myInputText = null;


    this.state = {
      comments: []
    };
  }

  onCreateComment(event) {
    event.preventDefault();

    if (!this.myInputText) {
      console.log("inText not set not inserting");
      return;
    }

    // Post
    console.log("Send the post");
    fetch("/api/createMessage", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text:this.myInputText.value})
    }).then(response => response.json())
      .then((result) => {
        console.log("Inserted the data!!", result);

        //clearing the input
        this.myInputText.value="";
        // Redraw
        console.log("Reload data");
        // this.reloadData();
      });

  }

  render() {
    console.log("Rendering");

    return (
      <MainTemplate>
        <div className="NewPost">

          <h2>Create a new post</h2>
          <form onSubmit={this.onCreateComment.bind(this)}>
            <div>
              <label htmlFor="inBreed"> Name 
                <input
                  id="inName"
                  type="text"
                  name="name"
                />
                {/* TODO: Remember to add the ref */ }
              </label>
            </div>
            <div>
              <label htmlFor="inBreed"> Breed 
                <input
                  id="inBreed"
                  type="text"
                  name="breed"
                />
                {/* TODO: Remember to add the ref */ }
              </label>
            </div>
            <div>
              <label htmlFor="inComment"> Story 
                <input
                  id="inComment"
                  type="text"
                  name="story"
                  ref = { input => this.myInputText = input}
                />
              </label>
            </div>

            <input type="submit" value="Submit" />
            {/* TODO: Should redirect to app page */ }
          </form>

        </div>
      </MainTemplate>
    );
  }
}

export default NewPost;