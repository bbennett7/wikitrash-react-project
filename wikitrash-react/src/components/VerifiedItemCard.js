import React, { Component } from 'react';

export default class VerifiedItemCard extends Component {

  render() {
    return (
      <div>
        {this.props.item.name}
        {this.props.item.rules}
      </div>
    )
  }
}
