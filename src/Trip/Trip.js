import React, { Component } from 'react'
import config from '../config'
import TripsContext from '../TripsContext'
import './Trip.css'

export default class Trip extends Component {
    state = {
        error: null,
        is_taken: false,
        success_msg: false,
    }

    handleSubmit = e => {
        e.preventDefault();

        const tripUpdate = {
            is_taken: this.state.is_taken
        }
        
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

    
        function deleteTripRequest(tripId, cb) {
            fetch(`${config.API_BASE_URL}trips/${tripId}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
                }
            })
            .then(data => {
                cb(tripId)
            })
            .catch(e => {
                console.error(e)
            })

        }

        function handleClickUp(e, tripId, kudos) {
            e.preventDefault();

            let newKudos = kudos + 1

            const tripUpdate = {
                "kudos": newKudos
            }

            console.log(`${config.API_BASE_URL}trips/${tripId}`)
            fetch(`${config.API_BASE_URL}trips/${tripId}`, {
                method: 'PATCH',
                body: JSON.stringify(tripUpdate),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
                }
            })
            .catch(e => {
                console.error(e)
            })

        }

        function handleClickDown(e, tripId, kudos) {
            e.preventDefault();
            let newKudos = kudos - 1

            const tripUpdate = {
                "kudos": newKudos
            }

            console.log(`${config.API_BASE_URL}trips/${tripId}`)
            fetch(`${config.API_BASE_URL}trips/${tripId}`, {
                method: 'PATCH',
                body: JSON.stringify(tripUpdate),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
                }
            })
            .catch(e => {
                console.error(e)
            })
        }

        const id = this.props.id
        const kudos = this.props.kudos

        return (
            <li className='trip-item'>
                <div className='trip-header-container'>
                    <h2 className='trip-heading'>{this.props.trip_name}</h2>
                    <div className='delete-trip-container'>
                    <TripsContext.Consumer>
                            {(context) => {
                                return <button 
                                    className="delete-trip" 
                                    type="button"
                                    onClick={() => {
                                    deleteTripRequest(
                                        id,
                                        context.removeTripFromState,
                                    )
                                    }}>                   
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="trash-alt" className="trashcan" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"></path></svg> 
                                    Remove
                                </button>                        
                            }} 
                    </TripsContext.Consumer>
                    </div>
                </div>
                <p className='trip-description'>{this.props.description}</p>
                <ul className='trip-elements'>
                    <li> <span className='sense-type'>{this.props.sense_one}</span> <span className='trip-element'>{this.props.element_one}</span> <button className='trip-resource'><a target='_blank' rel="noopener noreferrer" href={this.props.resource_one}>Visit Element Resource</a></button> </li>
                    <li> <span className='sense-type'>{this.props.sense_two}</span> <span className='trip-element'>{this.props.element_two}</span> <button className='trip-resource'><a target='_blank' rel="noopener noreferrer" href={this.props.resource_two}>Visit Element Resource</a></button></li>
                    <li> <span className='sense-type'>{this.props.sense_three}</span> <span className='trip-element'>{this.props.element_three}</span> <button className='trip-resource'><a target='_blank' rel="noopener noreferrer" href={this.props.resource_three}>Visit Element Resource</a></button> </li>
                    <li> <span className='sense-type'>{this.props.sense_four}</span> <span className='trip-element'>{this.props.element_four}</span> <button className='trip-resource'><a target='_blank' rel="noopener noreferrer" href={this.props.resource_four}>Visit Element Resource</a></button> </li>
                    <li> <span className='sense-type'>{this.props.sense_five}</span> <span className='trip-element'>{this.props.element_five}</span> <button className='trip-resource'><a target='_blank' rel="noopener noreferrer" href={this.props.resource_five}>Visit Element Resource</a></button> </li>
                </ul>
                <form 
                    className='modify-trip'
                    onSubmit={this.handleSubmit}>
                    <div className='complete-trip-container'>
                        <label htmlFor='request_service'>
                            Trip Status: <b>{this.state.is_taken ? 'Yes!' : 'Not yet!' }</b> 
                        </label>
                        <input
                            type='checkbox'
                            name='trip_complete'
                            checked={this.state.is_taken}
                            onChange={this.toggleTripTaken}
                            id='trip_complete'
                        />
                        <button type='submit' className='save-btn'>Save</button>
                    </div>
                    <p className='success_msg'>
                        <b>{this.state.success_msg ? 'Trip status updated!' : '' }</b> 
                    </p>
                </form>
                <form 
                    className='modify-trip'
                >
                    <div className='complete-trip-container'>
                        <label htmlFor='request_service'>
                            Trip Kudos: {this.props.kudos} 
                        </label>
                        <button 
                            className='kudos-btn up' 
                            aria-label='upvote'
                            aria-pressed='false'
                            onClick={(e) => {
                                handleClickUp(
                                    e, id, kudos
                                )
                            }}
                        >  
                            ^
                        </button>
                        <button 
                            className='kudos-btn down' 
                            aria-label='downvote' 
                            aria-pressed='false'
                            onClick={(e) => {
                                handleClickDown(
                                    e, id, kudos
                                )
                            }}
                        >
                            ^
                        </button>
                    </div>
                </form>
                <div className='separation-div'></div>
            </li>
        )

    }
}