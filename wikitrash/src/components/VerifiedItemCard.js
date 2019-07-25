import React, { Component } from 'react';

export default class VerifiedItemCard extends Component {

  locationList = () => {
    let locationsArray = this.props.item.locations.split("; ");
    let locationsMap = locationsArray.map((location) => {
      return <li>{location}</li>
    })

    if (locationsArray[0] === "") {
      return <li>None</li>
    } else {
      return locationsMap
    }
  }

  referenceList = () => {
    let referencesArray = this.props.item.references.split("; ");
    let referencesMap = referencesArray.map((reference) => {
      return <li><a href={reference} target="blank">{reference}</a></li>
    })

    if (referencesArray[0] === "") {
      return <li>None</li>
    } else {
      return referencesMap
    }
  }


  render() {
    return (
      <div className="Verified-card">
        <h4 className="Title">{this.props.item.name}</h4>
        <img src={this.props.item.image} alt={this.props.item.name} height="60vh" width="60vh"/>

        <ul>
          <li><strong>rules:</strong> {this.props.item.rules}</li>
          <li><strong>where to recycle:</strong> <ul> {this.locationList()} </ul> </li>
          <li><strong>references:</strong> <ol> {this.referenceList()} </ol> </li>
        </ul>
      </div>
    )
  }
}
