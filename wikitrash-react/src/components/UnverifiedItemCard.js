import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upVoteItem } from '../actions/items'

class UnverifiedItemCard extends Component {

  handleUpVote = (event) => {
    this.props.upVoteItem(this.props.item)
  }

  handleDownVote = (event) => {
    this.props.downVoteItem(this.props.item)
  }

  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.rules}</p><br />
        <button onClick={this.handleUpVote}>+1</button>
        <button onClick={this.handleDownVote}>-1</button>
      </div>
    )
  }
}

export default UnverifiedItemCard
