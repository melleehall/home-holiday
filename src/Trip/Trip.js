import React, { Component } from 'react'
import './Trip.css'

export default class Trip extends Component {
    render () {
        return (
            <li className='trip-item'>
                <h2 className='trip-heading'>Paris</h2>
                <ul>
                    <li> a description of this place and the experience </li>
                    <li> a recipe for homemade croissants (taste) </li>
                    <li> a playlist of French pop (sound) </li>
                    <li> a virtual tour of the Louvre  (see) </li>
                    <li> a recommendation for a delicious french roast bean (smell)</li>
                    <li> a list of things that "feel" french to incorporate into the experience (a silk scarf, a crusty baguette to pull apart, a sturdy but delicate bistro chair) (touch)</li>
                </ul>
            </li>
        )
    }
}