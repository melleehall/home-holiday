import React, { Component } from 'react'
import config from '../config'
import TripsContext from '../TripsContext'
import ValidationError from '../ValidationError'
import urlRegex from 'url-regex'
import './AddTripForm.css'


export default class AddTripForm extends Component {
    static contextType = TripsContext;

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
            success_msg: false
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

    updateResourceOne(resource_one) {
        this.setState({ resource_one: { value: resource_one, touched: true }});
    }

    updateResourceTwo(resource_two) {
        this.setState({ resource_two: { value: resource_two, touched: true }});
    }

    updateResourceThree(resource_three) {
        this.setState({ resource_three: { value: resource_three, touched: true }});
    }

    updateResourceFour(resource_four) {
        this.setState({ resource_four: { value: resource_four, touched: true }});
    }

    updateResourceFive(resource_five) {
        this.setState({ resource_five: { value: resource_five, touched: true }});
    }

    validateTripName() {
        const name = this.state.trip_name.value.trim();
        if (name.length === 0) {
            return 'Name is required';
        }  else if (name.length < 2) {
            return 'Name must be at least 2 characters long'
        } 
    }

    validateDescription() {
        const description = this.state.description.value.trim();
        if (description.length === 0) {
            return 'Description is required';
        } else if (description.length < 10) {
            return 'Description must be at least 10 characters long'
        }
    }

    validateElementOne() {
        const element = this.state.element_one.value.trim();
        if (element.length === 0) {
            return 'Element is required';
        } else if (element.length < 10) {
            return 'Element description must be at least 15 characters long'
        }
    }

    validateElementTwo() {
        const element = this.state.element_two.value.trim();
        if (element.length === 0) {
            return 'Element is required';
        } else if (element.length < 10) {
            return 'Element description must be at least 15 characters long'
        }
    }

    validateElementThree() {
        const element = this.state.element_three.value.trim();
        if (element.length === 0) {
            return 'Element is required';
        } else if (element.length < 10) {
            return 'Element description must be at least 15 characters long'
        }
    }

    validateElementFour() {
        const element = this.state.element_four.value.trim();
        if (element.length === 0) {
            return 'Element is required';
        } else if (element.length < 10) {
            return 'Element description must be at least 15 characters long'
        }
    }

    validateElementFive() {
        const element = this.state.element_five.value.trim();
        if (element.length === 0) {
            return 'Element is required';
        } else if (element.length < 10) {
            return 'Element description must be at least 15 characters long'
        }
    }

    validateResourceOne() {
        const resource = this.state.resource_one.value.trim();
        if (resource.length === 0) {
            return 'Resource is required and must be a URL';
        } else if (!resource.includes('https://') || !urlRegex({exact: true}).test(resource)) {
            return 'Entry must be a valid URL beginning with https://'
        }
    }

    validateResourceTwo() {
        const resource = this.state.resource_two.value.trim();
        if (resource.length === 0) {
            return 'Resource is required and must be a URL';
        } else if (!resource.includes('https://') || !urlRegex({exact: true}).test(resource)) {
            return 'Entry must be a valid URL beginning with https://'
        }
    }

    validateResourceThree() {
        const resource = this.state.resource_three.value.trim();
        if (resource.length === 0) {
            return 'Resource is required and must be a URL';
        } else if (!resource.includes('https://') || !urlRegex({exact: true}).test(resource)) {
            return 'Entry must be a valid URL beginning with https://'
        }
    }

    validateResourceFour() {
        const resource = this.state.resource_four.value.trim();
        if (resource.length === 0) {
            return 'Resource is required and must be a URL';
        } else if (!resource.includes('https://') || !urlRegex({exact: true}).test(resource)) {
            return 'Entry must be a valid URL beginning with https://'
        }
    }

    validateResourceFive() {
        const resource = this.state.resource_five.value.trim();
        if (resource.length === 0) {
            return 'Resource is required and must be a URL';
        } else if (!resource.includes('https://') || !urlRegex({exact: true}).test(resource)) {
            return 'Entry must be a valid URL beginning with https://'
        }
    }

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

        fetch(`${config.API_BASE_URL}trips`, {
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
        .then(data => {
            this.setState({
              success_msg: true,
              trip_name: {value: ''},
              description: {value: ''},
              element_one: {value: ''},
              resource_one: {value: ''},
              element_two: {value: ''},
              resource_two: {value: ''},
              element_three: {value: ''},
              resource_three: {value: ''},
              element_four: {value: ''},
              resource_four: {value: ''},
              element_five: {value: ''},
              resource_five: {value: ''},
            })
        })
        .catch(e => {
            this.setState({error: true})
        })
    }

    render() {
        const nameError = this.validateTripName();
        const descriptionError = this.validateDescription();
        const elementOneError = this.validateElementOne();
        const elementTwoError = this.validateElementTwo();
        const elementThreeError = this.validateElementThree();
        const elementFourError = this.validateElementFour();
        const elementFiveError = this.validateElementFive();
        const resourceOneError = this.validateResourceOne();
        const resourceTwoError = this.validateResourceTwo()
        const resourceThreeError = this.validateResourceThree();
        const resourceFourError = this.validateResourceFour();
        const resourceFiveError = this.validateResourceFive();

        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <fieldset className='name-description'>
                    <label htmlFor='trip-name'>
                        Trip Name
                    </label>
                    <input 
                        type='text' 
                        name='trip-name' 
                        id='trip-name'
                        placeholder='Outerspace'
                        required aria-required="true"
                        onChange={e => this.updateTripName(e.target.value)} 
                    />
                    {this.state.trip_name.touched && <ValidationError  message={nameError} />}
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input 
                        type='text' 
                        name='description' 
                        id='description'
                        placeholder='It is out of this world!'
                        required aria-required="true"
                        onChange={e => this.updateDescription(e.target.value)} 
                    />
                    {this.state.description.touched && <ValidationError  message={descriptionError} />}
                </fieldset>
                <fieldset className='trip-element-one'>
                    <label htmlFor='element-one'>
                        Element One
                    </label>
                    <input 
                        type='text' 
                        name='element-one' 
                        id='element-one'
                        placeholder='The sky is the limit for space-themed cocktails - but here are a few to get you started.'
                        required aria-required="true"
                        onChange={e => this.updateElementOne(e.target.value)} 
                    />
                    {this.state.element_one.touched && <ValidationError  message={elementOneError} />}
                    <label htmlFor='resource-one'>
                        Resource One [Must be a url]
                    </label>
                    <input 
                        type='text' 
                        name='resource-one' 
                        id='resource-one'
                        placeholder='https://www.drinkstuff.com/blog/new-horizon-space-inspired-cocktails/'
                        required aria-required="true"
                        onChange={e => this.updateResourceOne(e.target.value)} 
                    />
                    {this.state.resource_one.touched && <ValidationError  message={resourceOneError} />}
                    <label htmlFor='sense-one'>
                        Sense One
                    </label>
                    <select name='sense-one' id='sense-one'>
                        <option>Taste</option>
                        <option>Touch</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-two'>
                    <label htmlFor='element-two'>
                        Element Two
                    </label>
                    <input 
                        type='text' 
                        name='element-two' 
                        id='element-two'
                        required aria-required="true"
                        onChange={e => this.updateElementTwo(e.target.value)} 
                    />
                    {this.state.element_two.touched && <ValidationError  message={elementTwoError} />}
                    <label htmlFor='resource-two'>
                        Resource Two [Must be a url]
                    </label>
                    <input 
                        type='text' 
                        name='resource-two' 
                        id='resource-two'
                        required aria-required="true"
                        onChange={e => this.updateResourceTwo(e.target.value)} 
                    />
                    {this.state.resource_two.touched && <ValidationError  message={resourceTwoError} />}
                    <label htmlFor='sense-two'>
                        Sense Two
                    </label>
                    <select name='sense-two' id='sense-two'>
                        <option>Taste</option>
                        <option>Touch</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-three'>
                    <label htmlFor='element-three'>
                        Element Three
                    </label>
                    <input 
                        type='text' 
                        name='element-three' 
                        id='element-three'
                        required aria-required="true"
                        onChange={e => this.updateElementThree(e.target.value)} 
                    />
                    {this.state.element_three.touched && <ValidationError  message={elementThreeError} />}
                    <label htmlFor='resource-three'>
                        Resource Three 
                    </label>
                    <input 
                        type='text' 
                        name='resource-three' 
                        id='resource-three'
                        required aria-required="true"
                        onChange={e => this.updateResourceThree(e.target.value)} 
                    />
                    {this.state.resource_three.touched && <ValidationError  message={resourceThreeError} />}
                    <label htmlFor='sense-three'>
                        Sense Three [Must be a url]
                    </label>
                    <select name='sense-three' id='sense-three'>
                        <option>Taste</option>
                        <option>Touch</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-four'>
                    <label htmlFor='element-four'>
                        Element Four
                    </label>
                    <input 
                        type='text' 
                        name='element-four' 
                        id='element-four'
                        required aria-required="true"
                        onChange={e => this.updateElementFour(e.target.value)} 
                    />
                    {this.state.element_four.touched && <ValidationError  message={elementFourError} />}
                    <label htmlFor='resource-four'>
                        Resource Four [Must be a url]
                    </label>
                    <input 
                        type='text' 
                        name='resource-four' 
                        id='resource-four'
                        required aria-required="true"
                        onChange={e => this.updateResourceFour(e.target.value)} 
                    />
                    {this.state.resource_four.touched && <ValidationError  message={resourceFourError} />}
                    <label htmlFor='sense-four'>
                        Sense Four
                    </label>
                    <select name='sense-four' id='sense-four'>
                        <option>Taste</option>
                        <option>Touch</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <fieldset className='trip-element-five'>
                    <label htmlFor='element-five'>
                        Element Five
                    </label>
                    <input 
                        type='text' 
                        name='element-five' 
                        id='element-five'
                        required aria-required="true"
                        onChange={e => this.updateElementFive(e.target.value)} 
                    />
                    {this.state.element_five.touched && <ValidationError  message={elementFiveError} />}
                    <label htmlFor='resource-five'>
                        Resource Five [Must be a url]
                    </label>
                    <input 
                        type='text' 
                        name='resource-five' 
                        id='resource-five'
                        required aria-required="true"
                        onChange={e => this.updateResourceTwo(e.target.value)} 
                    />
                    {this.state.resource_five.touched && <ValidationError  message={resourceFiveError} />}
                    <label htmlFor='sense-five'>
                        Sense Five
                    </label>
                    <select name='sense-five' id='sense-five'>
                        <option>Taste</option>
                        <option>Touch</option>
                        <option>Smell</option>
                        <option>Hear</option>
                        <option>See</option>
                    </select>
                </fieldset>
                <button 
                    className='submit-btn'
                    disabled={
                        this.validateTripName() ||
                        this.validateDescription() 
                    }>
                    Submit
                </button>
                <p className='success_msg'>
                    <b>{this.state.success_msg ? 'Your contact information was successfully submitted.  Thank you!' : 'All fields are required' }</b> 
                </p>
            </form>
        )
    }
}