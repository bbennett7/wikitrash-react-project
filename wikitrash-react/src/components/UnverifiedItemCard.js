import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVoteItem } from '../actions/items'

class UnverifiedItemCard extends Component {

  handleOnUpVote = (event) => {
    this.props.upVoteItem(this.props.item)
  }

  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.rules}</p><br />
        <button onClick={this.handleOnUpVote}>+1</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteItem: item => dispatch(upVoteItem(item))
  }
}

export default connect(null, mapDispatchToProps)(UnverifiedItemCard)
