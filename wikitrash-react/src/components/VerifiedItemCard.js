import React, { Component } from 'react';

export default class VerifiedItemCard extends Component {

  render() {
    return (
      <div className="Verified-card">
        <h4>{this.props.item.name}</h4>
        <img src={this.props.item.image} height="50vh" width="50vh"/>
        <ul>
          <li><strong>rules:</strong> {this.props.item.rules}</li>
          <li><strong>where to recycle:</strong> {this.props.item.locations}</li>
          <li><strong>references:</strong> {this.props.item.references}</li>
        </ul>
      </div>
    )
  }
}
