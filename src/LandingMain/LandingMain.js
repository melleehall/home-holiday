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
                    Home Holiday was inspired by the virtual vacations many people around the globe are creating in their living rooms and backyards while sheltering at home due to COVID-19.  
                    To provide the most immersive experience, all itineraries incorporate elements aimed at each of the 5 senses.
                    Browse our full trip itineraries from the {' '}
            <NavLink to='/trips' className='bold'>
                Trips List
            </NavLink>  
            {' '}
            and contribute to the community by adding a travel experience of your own on the 
            {' '} 
            <NavLink to='/add-trip' className='bold'>
                Add Trip 
            </NavLink>
            {' '} 
            page.
                </p>
                <p className='intro-p'>
                    Login credentials are not currently required as we are in the process of curating a robust list of trips from our users.  Simply, click 'Demo' to enjoy all features of home holiday.
                </p>
            <NavLink to='/dashboard' className='demo-btn'>
                DEMO
            </NavLink>
            <div className='features-container'>
                <LandingPageFeature text='Explore hundreds of home holiday experiences'/>
                <LandingPageFeature text='Create trips of your own and share them with friends'/>
                <LandingPageFeature text='Increase your Wanderer Rank by completing trips'/>
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