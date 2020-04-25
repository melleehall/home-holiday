import React, { Component } from 'react'
import DashboardStat from '../DashboardStat/DashboardStat'
import './DashboardMain.css'

export default class DashboardMain extends Component {
    render() {
        return (
            <div className='dashboard-main-container'>
                <div className='dashboard-nav-container'>
                </div>
                <h2 className='stats-heading'>
                    The Stats
                </h2>
                <ul className='stat-list'>
                    <DashboardStat />
                    <DashboardStat />
                    <DashboardStat />
                </ul>
            </div>
        )
    }
}