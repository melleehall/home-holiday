import React, { Component } from 'react'
import './Trip.css'

export default class Trip extends Component {
    render () {
        return (
            <li className='trip-item'>
                <h2 className='trip-heading'>{this.props.trip_name}</h2>
                <p>{this.props.description}</p>
                <ul className='trip-elements'>
                    <li> <span className='sense-type'>{this.props.sense_one}</span> <button><a target='_blank' rel="noopener noreferrer" href={this.props.resource_one} className='trip-resource'>Visit Element Resource</a></button> <span className='trip-element'>{this.props.element_one}</span></li>
                    <li> <span className='sense-type'>{this.props.sense_two}</span> <button><a target='_blank' rel="noopener noreferrer" href={this.props.resource_two} className='trip-resource'>Visit Element Resource</a></button><span className='trip-element'>{this.props.element_two}</span> </li>
                    <li> <span className='sense-type'>{this.props.sense_three}</span> <button><a target='_blank' rel="noopener noreferrer" href={this.props.resource_three} className='trip-resource'>Visit Element Resource</a></button> <span className='trip-element'>{this.props.element_three}</span> </li>
                    <li> <span className='sense-type'>{this.props.sense_four}</span> <button><a target='_blank' rel="noopener noreferrer" href={this.props.resource_four} className='trip-resource'>Visit Element Resource</a></button> <span className='trip-element'>{this.props.element_four}</span> </li>
                    <li> <span className='sense-type'>{this.props.sense_five}</span> <button><a target='_blank' rel="noopener noreferrer" href={this.props.resource_five} className='trip-resource'>Visit Element Resource</a></button> <span className='trip-element'>{this.props.element_five}</span> </li>
                </ul>
                <div className='separation-div'></div>
            </li>
        )
    }
}