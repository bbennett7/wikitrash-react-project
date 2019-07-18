import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions/items'
import SearchBar from '../components/SearchBar';
import VerifiedItemCard from '../components/VerifiedItemCard'


class VerifiedContainer extends Component {

  renderCard = () => {
    if (this.props.searchItem.length > 0) {
      return <VerifiedItemCard item={this.props.searchItem[0]}/>
    }
  }

  componentDidUpdate = () => {
    this.renderCard()
  }



  render() {
    return (
      <div>
        Verified Items
        <SearchBar searchItems={this.props.searchItems}/>
        {this.renderCard()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items, searchItem: state.searchItem}
}

export default connect(mapStateToProps, { searchItems })(VerifiedContainer)
