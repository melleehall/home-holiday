import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import './NavBackground.css'

export default class NavBackground extends Component {
    render () {
        return (
            <div className='nav-background'>
                <Nav />
            </div>
        )
    }
}