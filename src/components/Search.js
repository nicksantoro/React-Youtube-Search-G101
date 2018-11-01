import React, { Component } from 'react';

/**
 * Search component to start looking for Youtube videos.
 *
 * @class Search
 * @extends {Component}
 * 
 * Get input to work by setting state
 * Show state value being updated in real time on page
 * Remove constructor and update handleChange **STRETCH GOAL**
 */
class Search extends Component {
  // constructor(props) {
  //   console.log(props.title);
  //   super(props);
  //   this.state = {
    // }

    state = {
      searchTerm: 'default'
    }
  
    handleChange = event => {
      this.setState({ searchTerm: event.target.value })
    }
  

  render() {
    // const {title, id, onSubmit} = this.
    const { title } = this.props
    const { searchTerm } = this.state
    
    console.log(this.state)

    return (
      <div>
        <h1>{title}</h1>

        <input onChange={this.handleChange} type="text"/>
        <p>{searchTerm}</p>
      </div>
    );
  }
}

export default Search;


