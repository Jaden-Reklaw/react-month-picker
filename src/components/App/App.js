import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    monthList: [],
  }

  //Run this as soon as App loads
  componentDidMount() {
    this.getMonths();
  }

  //Method used to do an ajax call to the server to request months from the calender.data.js
  getMonths = () => {
    axios.get('/calendar').then( (response) => {
        console.log(response.data);
        this.setState({monthList: response.data});
      }).catch( (error) => {
        alert('Bad things happened...');
        console.log('Error on GET calendar', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Select a Month</h1>
          <h3>SELECTED MONTH GOES HERE</h3>
          <br/>
        </header>
        <br/>
        <p>List of months goes here</p>
      </div>
    );
  }
}

export default App;