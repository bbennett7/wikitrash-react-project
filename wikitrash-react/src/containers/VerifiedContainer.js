import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

export default class UnverifiedContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        Verified Items
      </div>
    )
  }
}
