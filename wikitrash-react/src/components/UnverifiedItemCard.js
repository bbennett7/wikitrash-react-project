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
      <div className="Unverified-card">
        <h4 className="Title">{this.props.item.name}</h4>
        <img src={this.props.item.image} height="60vh" width="60vh"/>
        <ul>
          <li><strong>rules:</strong> {this.props.item.rules}</li>
          <li><strong>where to recycle:</strong> {this.props.item.locations}</li>
          <li><strong>references:</strong> {this.props.item.references}</li>
          <button onClick={this.handleUpVote}>+1</button>
          <button onClick={this.handleDownVote}>-1</button>
        </ul>
      </div>
    )
  }
}

export default UnverifiedItemCard
