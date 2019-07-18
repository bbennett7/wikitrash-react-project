import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
    console.log(this.state.searchInput)
  }

  render() {
    return (
      <form>
      <label> Search <input type="text" onChange={this.handleOnChange} value={this.state.searchInput} /> </label>
      </form>
    )
  }
}
