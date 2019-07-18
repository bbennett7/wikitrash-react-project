import React, { Component } from 'react';

export default class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      recyclable: '',
      image: '',
      rules: '',
      locations: '',
      references: ''
    }
  }

  handleOnChange = (event) => {
    let key = event.target.name
    let value = event.target.value

    this.setState({
      [key]: value
    })
  }

  handleOnSubmit = (event) => {

  }


  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
          Add an item <br />
        <label> Item <input type="text" name="item" onChange={this.handleOnChange} value={this.state.item} /> </label> <br />
          <label> Recyclable?
            <label> Yes <input type="radio" name="recyclable" onChange={this.handleOnChange} value="true" /> </label>
            <label> No <input type="radio" name="recyclable" onChange={this.handleOnChange} value="false" /> </label>
          </label> <br />
        <label> Image <input type="text" name="image" onChange={this.handleOnChange} value={this.state.image} /> </label> <br />
        <label> Rules <input type="textarea" name="rules" onChange={this.handleOnChange} value={this.state.rules} /> </label> <br />
        <label> Locations (separated by semicolon) <input type="textarea" name="locations" onChange={this.handleOnChange} value={this.state.locations} /> </label> <br />
        <label> References (separated by semicolon) <input type="textarea" name="references" onChange={this.handleOnChange} value={this.state.references} /> </label> <br />
        <input type="submit" value="Add item"/>
      </form>
    )
  }
}
