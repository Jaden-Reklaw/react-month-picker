// import need to use jsx
import React, { Component } from 'react';

//Import style
import './MonthList.css'

//Import MonthItem to be used with MonthList
import MonthItem from '../MonthItem/MonthItem';

class MonthList extends Component {
    render() {
        //attach prop to a variable name
        let list = this.props.monthList;

        return(
            <div>
                <h2>Month List</h2>
                <ul>
                    {list.map((month) => {
                        return <MonthItem month={month} key={month.id} handleChangeFor={this.props.handleChangeFor}/>
                    })}
                </ul>
            </div>
        );
    }
}

export default MonthList;