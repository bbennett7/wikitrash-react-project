import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchItems, upVoteItem, downVoteItem } from '../actions/items'
import SearchBar from '../components/SearchBar';
import UnverifiedItemCard from '../components/UnverifiedItemCard'

class UnverifiedContainer extends Component {

    renderCards = () => {
      const unverifiedItems = this.props.items.filter((item) => item.verified === false)

      const searchItem = this.props.searchItem
      if (searchItem.length > 0 && unverifiedItems.filter((item) => item.name.toLowerCase() == searchItem[0].name.toLowerCase()).length === 1) {
        return <UnverifiedItemCard item={this.props.searchItem[0]} upVoteItem={this.props.upVoteItem} downVoteItem={this.props.downVoteItem} />
      } else {
        return unverifiedItems.map((item) => {
          return <UnverifiedItemCard item={item} upVoteItem={this.props.upVoteItem} downVoteItem={this.props.downVoteItem} />
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

  const mapDispatchToProps = (dispatch) => {
    return {
      searchItems: item => dispatch(searchItems(item)),
      upVoteItem: item => dispatch(upVoteItem(item)),
      downVoteItem: item => dispatch(downVoteItem(item))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UnverifiedContainer)
