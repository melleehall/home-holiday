import React, { Component } from 'react'
import TripsContext from '../TripsContext'
import './DashboardStat.css' 

export default class DashboardStat extends Component {
    render () {
        return (
            <li className='dashboard-stat'>
                <h2>{this.props.name}</h2>
                <p>
                    {this.props.stat}
                </p>
            </li>
        )
    }
}