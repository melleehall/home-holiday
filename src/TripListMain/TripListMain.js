import React from 'react'
import { withRouter } from 'react-router-dom'
import Trip from '../Trip/Trip'
import TripsContext from '../TripsContext'
import './TripListMain.css'

function TripListMain(props) {
    function generateTripInstances (trips) {
        const tripInstances = trips.map(trip =>
            <Trip
                id={trip.id.toString()}
                key={trip.id}
                trip_name={trip.trip_name}
                description={trip.description}
                element_one={trip.element_one} 
                sense_one={trip.sense_one} 
                resource_one={trip.resource_one}
                element_two={trip.element_two} 
                sense_two={trip.sense_two}
                resource_two={trip.resource_two}
                element_three={trip.element_three} 
                sense_three={trip.sense_three}
                resource_three={trip.resource_three}
                element_four={trip.element_four} 
                sense_four={trip.sense_four}
                resource_four={trip.resource_four}
                element_five={trip.element_five} 
                sense_five={trip.sense_five}
                resource_five={trip.resource_five}
            />  
        )
        return tripInstances
    }

    return (
        <div className='trips-list-container'>
            <TripsContext.Consumer> 
                {(context) => {
                    return generateTripInstances(context.trips)
                }} 
            </TripsContext.Consumer>
        </div>
    )
}

TripListMain.defaultProps = {
    trips: []
}

export default withRouter(TripListMain)