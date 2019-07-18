import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerifiedItemCard from '../components/VerifiedItemCard'

class TopSearchesContainer extends Component {

  renderCards = () => {
    const itemsArray = [...this.props.items]

    itemsArray.sort(function (a, b) {
      return b.searches - a.searches;
    });
    const topSix = itemsArray.slice(0, 6)

    return topSix.map((item) => {
      return <VerifiedItemCard item={item} />
    })
  }

    render() {
      return (
        <div className="Main">
          <h3>top searched items</h3>
          {this.renderCards()}
        </div>
      )
    }
  }

  const mapStateToProps = state => {
    return {items: state.items, searchItem: state.searchItem}
  }

export default connect(mapStateToProps)(TopSearchesContainer)
