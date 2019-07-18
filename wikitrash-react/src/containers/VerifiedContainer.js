import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions/items'
import SearchBar from '../components/SearchBar';
import VerifiedItemCard from '../components/VerifiedItemCard'


class VerifiedContainer extends Component {

  render() {
    return (
      <div>
        Verified Items
        <SearchBar searchItems={this.props.searchItems}/>
        <VerifiedItemCard />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps, { searchItems })(VerifiedContainer)
