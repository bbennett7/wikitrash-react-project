import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions/items'
import SearchBar from '../components/SearchBar';
import VerifiedItemCard from '../components/VerifiedItemCard'


class VerifiedContainer extends Component {

  renderCards = () => {
    if (this.props.searchItem.length > 0) {
      return <VerifiedItemCard item={this.props.searchItem[0]} />
    } else {
      return this.props.items.map((item) => {
        return <VerifiedItemCard item={item}/>
      })
    }
  }

  componentDidUpdate = () => {
    this.renderCards()
  }

  render() {
    return (
      <div>
        Verified Items
        <SearchBar searchItems={this.props.searchItems} />
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items, searchItem: state.searchItem}
}

export default connect(mapStateToProps, { searchItems })(VerifiedContainer)
