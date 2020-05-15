import React, { Component } from 'react'
import AddTripForm from '../AddTripForm/AddTripForm'
import './AddTripMain.css'

export default class AddTripMain extends Component {
    render() {
        return (
            <div>
                <h2 className='add-trip-header'>Where to Next?</h2>
                <h3>Instructions</h3>
                <p className='add-trip-p'>
                    Add a trip to our database so you can share it with others or save it for a rainy day for yourself!
                    Each element of your trip must be categorized as correlating with one of the five senses. 
                </p>
                <AddTripForm />
            </div>
        )
    }
}