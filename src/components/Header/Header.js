import React, { Component } from 'react';

import './Header.css';


class Header extends Component{
  render() {
    return (
        <header>
          <h1>Select a Month</h1>
          <h3>{this.props.month}</h3>
        </header>
    );
  }   
}

export default Header;