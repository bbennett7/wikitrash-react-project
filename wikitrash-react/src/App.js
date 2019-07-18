import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchItems } from './actions/items'

class App extends Component {

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          wikitrash
        </header>
        <NavBar />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {items: state.items}
}

export default connect(mapStateToProps, {fetchItems})(App);
