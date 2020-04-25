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
                    Dashboard
                </h2>
                <ul className='stat-list'>
                    <DashboardStat 
                        name='Trips Taken'
                        stat='24'
                    />
                    <DashboardStat 
                        name='Total Trips Planned'
                        stat='187'
                    />
                    <DashboardStat 
                        name='Wanderer Ranking'
                        stat='Frequent Flyer'
                    />
                </ul>
            </div>
        )
    }
}