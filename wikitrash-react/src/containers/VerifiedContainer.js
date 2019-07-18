import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

class VerifiedContainer extends Component {

  searchItems = (name) => {
    console.log(this.props.items.filter((item) => item.name.toLowerCase() === name.toLowerCase()))
    
    return this.props.items.filter((item) => item.name.toLowerCase() === name.toLowerCase())
  }

  render() {
    return (
      <div>
        Verified Items
        <SearchBar searchItems={this.searchItems}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps)(VerifiedContainer)
