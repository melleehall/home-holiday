import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LandingPageFeature from '../LandingPageFeature/LandingPageFeature'
import './LandingMain.css'

export default class LandingMain extends Component {
    render () {
        return (
            <div className='landing-main-container'>
                <h2>What's a "home holiday"?</h2>
                <p className='intro-p'>
                    Home Holiday was inspired by the "virtual vacations" many people around the globe are currently creating in their living rooms and backyards while sheltering at home. 
                    This virtual vacation generator provides users with full "trip" itineraries that incorporate elements aimed at each of the 5 senses.
                </p>
            <NavLink to='/dashboard' className='demo-btn'>
                DEMO
            </NavLink>
            <div className='features-container'>
                <LandingPageFeature />
                <LandingPageFeature />
                <LandingPageFeature />
            </div>
            <div className='quarantine-p'>
                <h2>A note on quarantine - the inspiration for home holiday.</h2>
                <p> 
                    Unprecedented: the word of 2020.  
                    In most contexts, we're using this word to refer to negative impacts of COVID-19.
                    Unprecedented fear.  Unprecedented unemployment.  Unprecedented demands on healthcare.  Unprecedented boredom.
                </p>
                <p>
                    That said, many people are also noticing some unprecedented positives.  
                    Unprecedented clarity in the Venice Canals.  Unprecedented time for reflection on what truly matters.  Unprecedented time spent with family.
                </p>
                <p>
                    My hope is that <span className='bold'>home holiday</span> guides us all to focus on the unprecedented good... & maybe even carry a dose of this good stuff back with us to our post-quarantine lives.
                </p>
                <p>
                    - Melanie
                </p>
            </div>
            </div>
        )
    }
}