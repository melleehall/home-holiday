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
            {/* <h2 className='trips-list-heading'>Trips</h2>
            <ul>
                <Trip 
                    place='France'
                    taste='a recipe for homemade croissants'
                    hear='a playlist of French pop'
                    see='a virtual tour of the Louvre'
                    smell='a recommendation for a delicious french roast bean'
                    touch='things that "feel" french to incorporate into the experience (a silk scarf, a crusty baguette to pull apart, a sturdy but delicate bistro chair)'
                />
                <Trip 
                    place='Underwater'
                    taste='a recipe for miso soup'
                    hear='waves and whale sounds'
                    see='virtual tour of the Great Barrier Reef'
                    smell='Capri Blue candle from Anthropologie'
                    touch='Ocean salt face and body scrup from Lush Cosmetics'
                />
                <Trip 
                    place='Mountain Retreat'
                    taste='recipe for cast iron cornbread and a huckleberry cocktail'
                    hear='Caamp and Mt Joy playlist'
                    see='Ski Documentary'
                    smell='fancy smores recipe for backyard campfire'
                    touch='flannel blanket recommendation'
                />
            </ul> */}
            </TripsContext.Consumer>
        </div>
    )
}

export default withRouter(TripListMain)