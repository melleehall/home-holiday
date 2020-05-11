import React, { Component } from 'react'
import './Trip.css'

export default class Trip extends Component {
    render () {
        return (
            <li className='trip-item'>
                <h2 className='trip-heading'>{this.props.trip_name}</h2>
                <p>{this.props.description}</p>
                <ul className='trip-elements'>
                    <li> <span className='sense-type'>{this.props.sense_one}</span> <span className='trip-element'>{this.props.element_one}</span> <span className='trip-resource'>{this.props.resource_one}</span></li>
                    <li> <span className='sense-type'>{this.props.sense_two}</span> <span className='trip-element'>{this.props.element_two}</span> <span className='trip-resource'>{this.props.resource_two}</span></li>
                    <li> <span className='sense-type'>{this.props.sense_three}</span> <span className='trip-element'>{this.props.element_three}</span> <span className='trip-resource'>{this.props.resource_three}</span></li>
                    <li> <span className='sense-type'>{this.props.sense_four}</span> <span className='trip-element'>{this.props.element_four}</span> <span className='trip-resource'>{this.props.resource_four}</span></li>
                    <li> <span className='sense-type'>{this.props.sense_five}</span> <span className='trip-element'>{this.props.element_five}</span> <span className='trip-resource'>{this.props.resource_five}</span></li>
                </ul>
                <div className='separation-div'></div>
            </li>
        )
    }
}