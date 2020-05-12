import React, { Component } from 'react'
import DashboardStat from '../DashboardStat/DashboardStat'
import TripsContext from '../TripsContext'
import './DashboardMain.css'

export default class DashboardMain extends Component {
    render() {
        function generateStats (tripsPlanned) {
            return <DashboardStat 
                        name='Total Trips Planned'
                        stat={tripsPlanned}
            />
        }

        return (
            <div className='dashboard-main-container'>
                <div className='dashboard-nav-container'>
                </div>
                <h2 className='stats-heading'>
                    Dashboard
                </h2>
                <ul className='stat-list'>
                <TripsContext.Consumer> 
                {(context) => {
                    return generateStats(context.tripsPlanned)
                }}
                </TripsContext.Consumer> 
                    <DashboardStat 
                        name='Trips Taken'
                        stat='24'
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