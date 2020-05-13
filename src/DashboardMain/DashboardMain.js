import React, { Component } from 'react'
import DashboardStat from '../DashboardStat/DashboardStat'
import TripsContext from '../TripsContext'
import './DashboardMain.css'

export default class DashboardMain extends Component {
    render() {
        function generateStats (context) {
            let status;

            if (context.tripsTaken > 10) {
                status = 'Global Citizen'
            } else if (context.tripsTaken > 5) {
                status = 'Expert Explorer'
            } else if (context.tripsTaken > 2){
                status = 'Frequent Flyer'
            } else {
                status = 'Fresh Passport'
            }

              const statInstances = <ul className='stat-list'>
                        <DashboardStat 
                            name='Total Trips Planned'
                            stat={context.tripsPlanned}
                        />
                        <DashboardStat 
                            name='Trips Taken'
                            stat={context.tripsTaken}
                        />
                        <DashboardStat 
                            name='Wanderer Ranking'
                            stat={status}
                        />
                    </ul>

            return statInstances
        }

        return (
            <div className='dashboard-main-container'>
                <div className='dashboard-nav-container'>
                </div>
                <h2 className='stats-heading'>
                    Dashboard
                </h2>
                <TripsContext.Consumer> 
                {(context) => {
                    return generateStats(context)
                }}
                </TripsContext.Consumer> 
            </div>
        )
    }
}