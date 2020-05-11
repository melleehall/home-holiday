import React, { Component } from 'react'
import './Trip.css'

export default class Trip extends Component {
    render () {
        return (
            <li className='trip-item'>
                <h2 className='trip-heading'>{this.props.trip_name}</h2>
                <p>{this.props.description}</p>
                <ul className='trip-elements'>
                    <li> <span className='sense-type'>{this.props.sense_one}</span> {this.props.element_one} </li>
                    <li> <span className='sense-type'>{this.props.sense_two}</span> {this.props.element_two} </li>
                    <li> <span className='sense-type'>{this.props.sense_three}</span> {this.props.element_three} </li>
                    <li> <span className='sense-type'>{this.props.sense_four}</span> {this.props.element_four} </li>
                    <li> <span className='sense-type'>{this.props.sense_five}</span> {this.props.element_five} </li>
                </ul>
                <div className='separation-div'></div>
            </li>
        )
    }
}