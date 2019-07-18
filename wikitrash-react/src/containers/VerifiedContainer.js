import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'

export default class UnverifiedContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        Verified Items
      </div>
    )
  }
}
