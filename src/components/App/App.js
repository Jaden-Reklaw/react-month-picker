import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Import Components
import Header from '../Header/Header'
import MonthList from '../MonthList/MonthList'

class App extends Component {
  state = {
    monthList: [],
    month: '',
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

  handleChangeFor = (month) => {
    console.log(month);
    this.setState({month: month});
  }

  render() {
    return (
      <div className="App">
        <Header month={this.state.month}/>
        <MonthList monthList={this.state.monthList} handleChangeFor={this.handleChangeFor}/>
      </div>
    );
  }
}

export default App;
