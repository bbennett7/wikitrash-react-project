import React, { Component } from 'react';

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
        <img src={this.props.item.image} alt={this.props.item.name} height="60vh" width="60vh"/>
        <ul>
          <li><strong>rules:</strong> {this.props.item.rules}</li>
          <li><strong>where to recycle:</strong> {this.props.item.locations}</li>
          <li><strong>references:</strong> {this.props.item.references}</li>
          <br />
          <p>Is this information accurate?</p>
          <button onClick={this.handleDownVote} className="Downvote">No</button>
          <button onClick={this.handleUpVote} className="Upvote">Yes</button>
        </ul>
      </div>
    )
  }
}

export default UnverifiedItemCard
