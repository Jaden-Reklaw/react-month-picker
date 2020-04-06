// import need to use jsx
import React, { Component } from 'react';

//Import style
import './MonthItem.css'

class MonthItem extends Component {
    render() {
        return(
        <li>{this.props.month.name}</li>
        );
    }
}

export default MonthItem;