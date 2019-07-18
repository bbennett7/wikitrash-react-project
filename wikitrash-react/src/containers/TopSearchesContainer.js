import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerifiedItemCard from '../components/UnverifiedItemCard'

class TopSearchesContainer extends Component {

  renderCards = () => {
    const itemsArray = [...this.props.items]

    itemsArray.sort(function (a, b) {
      return b.searches - a.searches;
    });
    const topFive = itemsArray.slice(0, 5)

    return topFive.map((item) => {
      return <VerifiedItemCard item={item}/>
    })
  }

    render() {
      return (
        <div>
          Top Searches
          {this.renderCards()}
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {items: state.items, searchItem: state.searchItem}
  }

export default connect(mapStateToProps)(TopSearchesContainer)
