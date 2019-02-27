import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    }
  }
 

 handleInputChange = () => {
   this.setState({
     search: this.search.value
   })
 }

 render() {
  let filterPost = this.props.dogs.filter(
    (dog) => {
      return dog.name.indexOf(this.state.search) !== -1;
    }
  );
   return (
     <form>
       <input
         placeholder="Search for..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
   )
 }
}

export default Search;
