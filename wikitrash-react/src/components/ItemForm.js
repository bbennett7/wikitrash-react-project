import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items'

class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    event.preventDefault();
    let newItem = this.state
    this.props.addItem(newItem)

    this.setState({
      name: '',
      recyclable: '',
      image: '',
      rules: '',
      locations: '',
      references: ''
    })
  }


  render() {
    return (
      <div className="Main">
        <h3>add an item</h3>
        <form className="Add-form" onSubmit={this.handleOnSubmit}>
          <label> Item <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} /> </label> <br />
          <label> Recyclable?
            Yes <input type="radio" name="recyclable" onChange={this.handleOnChange} value="true" />
            No <input type="radio" name="recyclable" onChange={this.handleOnChange} value="false" />
          </label> <br />
          <label className="Image-input"> Image <input type="text" className="Image-input" name="image" onChange={this.handleOnChange} value={this.state.image} /> </label><br />
          <label> Rules <br/>
          <textarea name="rules" onChange={this.handleOnChange} value={this.state.rules} /> </label> <br />
          <label> Locations (separated by semicolon) <br/>
          <textarea name="locations" onChange={this.handleOnChange} value={this.state.locations} /> </label> <br />
          <label> References (separated by semicolon) <br/>
          <textarea name="references" onChange={this.handleOnChange} value={this.state.references} /> </label> <br />
          <input type="submit" value="Add item"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: formData => dispatch(addItem(formData))
  }
}

export default connect(null, mapDispatchToProps)(ItemForm)
