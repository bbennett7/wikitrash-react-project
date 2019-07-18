import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions/items'
import SearchBar from '../components/SearchBar';
import UnverifiedItemCard from '../components/UnverifiedItemCard'

class UnverifiedContainer extends Component {

    renderCards = () => {
      const unverifiedItems = this.props.items.filter((item) => item.upvotes < 10)
      const searchItem = this.props.searchItem
      if (searchItem.length > 0 && unverifiedItems.filter((item) => item.name.toLowerCase() == searchItem[0].name.toLowerCase()).length === 1) {
        return <UnverifiedItemCard item={this.props.searchItem[0]} />
      } else {
        return unverifiedItems.map((item) => {
          return <UnverifiedItemCard item={item}/>
        })
      }
    }

    componentDidUpdate = () => {
      this.renderCards()
    }

    render() {
      return (
        <div>
          Unverified Items
          <SearchBar searchItems={this.props.searchItems} />
          {this.renderCards()}
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {items: state.items, searchItem: state.searchItem}
  }

export default connect(mapStateToProps, { searchItems })(UnverifiedContainer)
