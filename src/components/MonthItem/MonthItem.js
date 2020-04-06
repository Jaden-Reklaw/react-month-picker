// import need to use jsx
import React, { Component } from 'react';

//Import style
import './MonthItem.css'

class MonthItem extends Component {

    clickMonth = (month) => {
        alert(month);
    }

    render() {
        return(
        <li onClick={((event) => this.clickMonth(this.props.month.name))}>{this.props.month.name}</li>
        );
    }
}

export default MonthItem;