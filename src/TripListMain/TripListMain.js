import React, { Component } from 'react'
import Trip from '../Trip/Trip'
import './TripListMain.css'

export default class TripListMain extends Component {
    render() {
        return (
            <div className='trips-list-container'>
                <h2 className='trips-list-heading'>Trips</h2>
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
                </ul>
            </div>
        )
    }
}