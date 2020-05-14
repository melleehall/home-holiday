import React, { Component } from 'react'
import DashboardStat from '../DashboardStat/DashboardStat'
import TripsContext from '../TripsContext'
import BackyardGuitar from '../Images/backyardguitar.jpg'
import MapWithPins from '../Images/mapwithpins.jpg'
import './DashboardMain.css'

export default class DashboardMain extends Component {
    render() {
        function generateStats (context) {
            let status;

            if (context.tripsTaken > 30) {
                status = 'Global Citizen'
            } else if (context.tripsTaken > 15) {
                status = 'Expert Explorer'
            } else if (context.tripsTaken > 5){
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
                            name='Total Trips Taken'
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
                <h2 className='stats-header'>
                    Dashboard
                </h2>
                <TripsContext.Consumer> 
                {(context) => {
                    return generateStats(context)
                }}
                </TripsContext.Consumer> 
                <img src={BackyardGuitar} alt='group enjoying guitar in yard' className='backyard-guitar'/>
                <div className='wanderer-ranking-guide'>
                    <h2>Wonderer Ranks</h2>
                    <ul>
                        <li><span className='trip-count'>30+</span>Global Citizen</li>
                        <li><span className='trip-count'>15+</span>Expert Explorer</li>
                        <li><span className='trip-count'>5+</span>Frequent Flyer</li>
                        <li><span className='trip-count'>0+</span>Fresh Passport</li>
                    </ul>
                </div>
                <img src={MapWithPins} alt='map with pins' className='map-with-pins'/>
            </div>
        )
    }
}