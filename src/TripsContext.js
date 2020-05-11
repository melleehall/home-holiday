import React from 'react'

const TripsContext = React.createContext({
    trips: [],
    removeTripFromState: () => {},
    addTripToState: () => {}
})

export default TripsContext