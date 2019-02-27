import React, { Component } from "react";

import "./style/App.css";

import Jumbo from "./Jumbotron.js";

import Comment from "./Comment.js";

import MainTemplate from "./MainTemplate.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.myInputText = null;

    this.state = {
      dogs: [],
      search: 's'
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    fetch("/api/getMessages")
      .then(res => res.json())
      .then(data => {
        this.setState({
          dogs: data
        });
      });
  }

  renderComments() {
    return this.state.dogs.map((c, i) => <Comment key={i++} comment={c} />);
  }

  updateSearch(event) {
    this.setState({search: 
      event.target.value.substring(0, 20)});
  }


  render() {
    return (
      <MainTemplate>
        <Jumbo />

        <div className="App container">

          <h1>Posts!</h1>
            
          <div className="row">{this.renderComments()}</div>        

        </div>
      </MainTemplate>
    );
  }
}

export default App;