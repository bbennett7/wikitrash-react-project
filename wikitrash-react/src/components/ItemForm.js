import React, { Component } from 'react';

export default class ItemForm extends Component {
  render() {
    return (
      <form>
          Add an item <br />
        <label> Item <input type="text" name="item" /> </label> <br />
          <label> Recyclable?
            <label> Yes <input type="radio" name="recyclable" value="true" /> </label>
            <label> No <input type="radio" name="recyclable" value="false" /> </label>
          </label> <br />
        <label> Image <input type="text" name="image" /> </label> <br />
        <label> Rules <input type="textarea" name="rules" /> </label> <br />
        <label> Locations <input type="textarea" name="locations" /> </label> <br />
        <label> References <input type="textarea" name="references" /> </label> <br />
        <input type="submit" value="Add item"/>
      </form>
    )
  }
}
