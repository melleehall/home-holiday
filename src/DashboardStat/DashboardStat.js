import React, { Component } from 'react'
import './DashboardStat.css' 

export default class DashboardStat extends Component {
    render () {
        return (
            <li className='dashboard-stat'>
                <h2>Stat name</h2>
                <p>
                    Stat and description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </li>
        )
    }
}