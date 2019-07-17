import React, { Component } from 'react';

import NavLink from './NavLink'

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink url="/home" text="home" />
        <NavLink url="/items/index" text="all items" />
        <NavLink url="/items/new" text="add item" />
        <NavLink url="/items/unverified" text="unverified items" />
      </nav>
    )
  }
}
