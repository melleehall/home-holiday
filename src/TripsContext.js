import React from 'react'

const TripsContext = React.createContext({
    trips: [],
    tripsPlanned: '',
    removeTripFromState: () => {},
    addTripToState: () => {}
})

export default TripsContext