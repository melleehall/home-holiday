import React, { Component } from 'react'
import config from '../config'
import './AddTripForm.css'

export default class AddTripForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip_name: {
                value: '',
                touched: false
            },
            description: {
                value: '',
                touched: false
            },
            element_one: {
                value: '',
                touched: false
            },
            element_two: {
                value: '',
                touched: false
            },
            element_three: {
                value: '',
                touched: false
            },
            element_four: {
                value: '',
                touched: false
            },
            element_five: {
                value: '',
                touched: false
            },
            resource_one: {
                value: '',
                touched: false
            },
            resource_two: {
                value: '',
                touched: false
            },
            resource_three: {
                value: '',
                touched: false
            },
            resource_four: {
                value: '',
                touched: false
            },
            resource_five: {
                value: '',
                touched: false
            },
            sense_one: {
                value: '',
                touched: false
            },
            sense_two: {
                value: '',
                touched: false
            },
            sense_three: {
                value: '',
                touched: false
            },
            sense_four: {
                value: '',
                touched: false
            },
            sense_five: {
                value: '',
                touched: false
            },
            error: false,
        }
    }

    updateTripName(trip_name) {
        this.setState({ trip_name: { value: trip_name, touched: true }});
    }

    updateDescription(description) {
        this.setState({ description: { value: description, touched: true }});
    }

    updateElementOne(element_one) {
        this.setState({ element_one: { value: element_one, touched: true }});
    }

    updateElementTwo(element_two) {
        this.setState({ element_two: { value: element_two, touched: true }});
    }

    updateElementThree(element_three) {
        this.setState({ element_three: { value: element_three, touched: true }});
    }

    updateElementFour(element_four) {
        this.setState({ element_four: { value: element_four, touched: true }});
    }

    updateElementFive(element_five) {
        this.setState({ element_five: { value: element_five, touched: true }});
    }

    // need to add validation functions

    handleSubmit(event) {
        event.preventDefault();
    
        const newTrip = {
            trip_name: event.target['trip-name'].value, 
            description: event.target['description'].value,  
            element_one: event.target['element-one'].value, 
            sense_one: event.target['sense-one'].value, 
            resource_one: event.target['resource-one'].value, 
            element_two: event.target['element-two'].value, 
            sense_two: event.target['sense-two'].value, 
            resource_two: event.target['resource-two'].value, 
            element_three: event.target['element-three'].value, 
            sense_three: event.target['sense-three'].value, 
            resource_three: event.target['resource-three'].value, 
            element_four: event.target['element-four'].value, 
            sense_four: event.target['sense-four'].value, 
            resource_four: event.target['resource-four'].value, 
            element_five: event.target['element-five'].value, 
            sense_five: event.target['sense-five'].value, 
            resource_five: event.target['resource-five'].value
        }

        fetch(`${config.API_BASE_URL}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrip)
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.status)
            }
            return res.json()
        })
        .then(trip => {
            this.context.addTripToState(trip)
        })
        .catch(e => {
            this.setState({error: true})
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <fieldset className='name-description'>
                    <label htmlFor='trip-name'>
                        Trip Name
                    </label>
                    <input type='text' name='trip-name' id='trip-name'
                                    onChange={e => this.updateTripName(e.target.value)} aria-required="true" />
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type='text' name='description' id='description'
                                    onChange={e => this.updateDescription(e.target.value)} aria-required="true" />
                </fieldset>
                <fieldset className='trip-element-one'>
                    <label htmlFor='element-one'>
                        Element One
                    </label>
                    <input type='text' name='element-one' id='element-one'
                                    onChange={e => this.updateElementOne(e.target.value)} aria-required="true" />
                    <label htmlFor='resource-one'>
                        Resource One
                    </label>
                    <input type='text' name='resource-one' id='resource-one'
                                    onChange={e => this.updateResourceOne(e.target.value)} aria-required="false" />
                    <label htmlFor='sense-one'>
                        Sense One
                    </label>
                    <select name='sense-one' id='sense-one'>
                        <option>Touch</option>
                        <option>Taste</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-two'>
                    <label htmlFor='element-two'>
                        Element Two
                    </label>
                    <input type='text' name='element-two' id='element-two'
                                    onChange={e => this.updateElementTwo(e.target.value)} aria-required="true" />
                    <label htmlFor='resource-two'>
                        Resource Two
                    </label>
                    <input type='text' name='resource-two' id='resource-two'
                                    onChange={e => this.updateResourceTwo(e.target.value)} aria-required="false" />
                    <label htmlFor='sense-two'>
                        Sense Two
                    </label>
                    <select name='sense-two' id='sense-two'>
                        <option>Touch</option>
                        <option>Taste</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-three'>
                    <label htmlFor='element-three'>
                        Element Three
                    </label>
                    <input type='text' name='element-three' id='element-three'
                                    onChange={e => this.updateElementThree(e.target.value)} aria-required="true" />
                    <label htmlFor='resource-three'>
                        Resource Three
                    </label>
                    <input type='text' name='resource-three' id='resource-three'
                                    onChange={e => this.updateResourceThree(e.target.value)} aria-required="false" />
                    <label htmlFor='sense-three'>
                        Sense Three
                    </label>
                    <select name='sense-three' id='sense-three'>
                        <option>Touch</option>
                        <option>Taste</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-four'>
                    <label htmlFor='element-four'>
                        Element Four
                    </label>
                    <input type='text' name='element-four' id='element-four'
                                    onChange={e => this.updateElementFour(e.target.value)} aria-required="true" />
                    <label htmlFor='resource-four'>
                        Resource Four
                    </label>
                    <input type='text' name='resource-four' id='resource-four'
                                    onChange={e => this.updateResourceFour(e.target.value)} aria-required="false" />
                    <label htmlFor='sense-four'>
                        Sense Four
                    </label>
                    <select name='sense-four' id='sense-four'>
                        <option>Touch</option>
                        <option>Taste</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-five'>
                    <label htmlFor='element-five'>
                        Element Five
                    </label>
                    <input type='text' name='element-five' id='element-five'
                                    onChange={e => this.updateElementFive(e.target.value)} aria-required="true" />
                    <label htmlFor='resource-five'>
                        Resource Five
                    </label>
                    <input type='text' name='resource-five' id='resource-five'
                                    onChange={e => this.updateResourceTwo(e.target.value)} aria-required="false" />
                    <label htmlFor='sense-five'>
                        Sense Five
                    </label>
                    <select name='sense-five' id='sense-five'>
                        <option>Touch</option>
                        <option>Taste</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <button>
                    Submit
                </button>
            </form>
        )
    }
}