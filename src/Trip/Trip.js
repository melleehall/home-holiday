import React, { Component } from 'react'
import config from '../config'
import './Trip.css'

export default class Trip extends Component {
    state = {
        error: null,
        is_taken: false,
        success_msg: false
    }

    handleSubmit = e => {
        e.preventDefault();

        const tripUpdate = {
            is_taken: this.state.is_taken
        }
        console.log(tripUpdate)
        console.log(this.props.id)
        console.log(`${config.API_BASE_URL}trips/${this.props.id}`)
        this.setState({ error: null })
        fetch(`${config.API_BASE_URL}trips/${this.props.id}`, {
            method: 'PATCH',
            body: JSON.stringify(tripUpdate),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
              // get the error message from the response,
              return res.json().then(error => {
                // then throw it
                throw error
              })
            }
            return res.json()
        })
        .then(data => {
            this.setState({
                success_msg: true
            })
        })
        .catch(error => {
            this.setState({ error })
        })
    }

    componentDidMount() {
        this.setState({
            is_taken: this.props.is_taken
        })
    }


    toggleTripTaken = () => {
        this.setState(prevState => ({
          is_taken: !prevState.is_taken,
        }));
    }

    render () {
        console.log(`${this.props.id}: ${this.props.is_taken}`)

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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='request_service'>
                        Mark Trip Complete
                    </label>
                    <input
                        type='checkbox'
                        name='trip_complete'
                        checked={this.state.is_taken}
                        onChange={this.toggleTripTaken}
                        id='trip_complete'
                    />
                    <button type='submit'>Save</button>
                <p className='success_msg'>
                    <b>{this.state.success_msg ? 'Trip status updated!' : '' }</b> 
                </p>
                </form>
                <div className='separation-div'></div>
            </li>
        )
    }
}