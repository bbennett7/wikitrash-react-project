import React, { Component } from 'react';

export default class VerifiedItemCard extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.rules}</p><br />
      </div>
    )
  }
}
