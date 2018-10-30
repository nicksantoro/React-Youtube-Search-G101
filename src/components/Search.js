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
  constructor(props) {
    console.log(props.title);
    super(props);
    this.state = {

    }
  }

    handleChange(e) {
      this.setState({
        searchTerm : e.target.value
      })
    }

  render() {
    const { title } = this.props;
    const { searchTerm } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <input type="text" />
        { searchTerm }
      </div>
    );
  }
}

export default Search;


