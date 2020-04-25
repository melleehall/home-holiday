import React, { Component } from 'react'
import Trip from '../Trip/Trip'
import './TripListMain.css'

export default class TripListMain extends Component {
    render() {
        return (
            <div className='trips-list-container'>
                <h2 className='trips-list-heading'>Trips</h2>
                <ul>
                    <Trip />
                    <Trip />
                    <Trip />
                    <Trip />
                </ul>
            </div>
        )
    }
}