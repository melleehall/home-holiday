import React, { Component } from 'react'
import './LandingPageFeature.css'

export default class LandingPageFeature extends Component {
    render () {
        return (
            <li className='app-feature'>
                {/* <h3>App Feature</h3> */}
                <p>{this.props.text}</p>
            </li>
        )
    }
}