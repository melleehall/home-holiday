import React from 'react'

const TripsContext = React.createContext({
    trips: [],
    tripsPlanned: '',
    tripsTaken: '',
    removeTripFromState: () => {},
    addTripToState: () => {}
})

export default TripsContext