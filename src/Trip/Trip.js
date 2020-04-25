import React, { Component } from 'react'
import './Trip.css'

export default class Trip extends Component {
    render () {
        return (
            <li className='trip-item'>
                <h2 className='trip-heading'>{this.props.place}</h2>
                <ul>
                    <li> Taste: {this.props.taste} </li>
                    <li> Hear: {this.props.hear}  </li>
                    <li> See: {this.props.see} </li>
                    <li> Smell: {this.props.smell} </li>
                    <li> Touch: {this.props.touch}</li>
                </ul>
            </li>
        )
    }
}