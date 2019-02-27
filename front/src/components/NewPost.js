import React, { Component } from "react";
import MainTemplate from "./MainTemplate.js";

class NewPost extends Component {
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

    if (!this.myInputText) {
      return;
    }

    // Post
    console.log("Send the post");
    this.postData("/api/createNewPost", 
      {
        text:this.myInputText.value, 
        name:this.author.value, 
        breed:this.breed.value
      })
      .then((result) => {
        //clearing the input
        this.author.value="";
        this.breed.value="";
        this.myInputText.value="";

        this.props.history.push("/app");
      });
  }

  render() {
    console.log("Rendering");

    return (
      <MainTemplate>
        <div className="NewPost">

          <h2>Create comments</h2>
          <form onSubmit={this.onCreatePost.bind(this)}>
            <div>
              <label htmlFor="inAuthor"> Name
                <input
                  id="inAuthor"
                  type="text"
                  name="name"
                  ref = {input => this.author = input}
                />
              </label>
            </div>
            <div>
              <label htmlFor="inBreed"> Breed
                <input
                  id="inBreed"
                  type="text"
                  name="breed"
                  ref = {input => this.breed = input}
                />
              </label>
            </div>
            <div>
              <label htmlFor="inStory"> Story:
                <input
                  id="inStory"
                  type="text"
                  name="text"
                  ref = { input => this.myInputText = input}
                />
              </label>
            </div>

            <input type="submit" value="Submit" />
          </form>

        </div>
      </MainTemplate>
    );
  }
}

export default NewPost;