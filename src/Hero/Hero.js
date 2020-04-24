import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import '../universalstyles.css'
import './Hero.css'

export default class Hero extends Component {
    render() {
        return (
            <div className="hero-image">
                <Nav />
                <div className="hero-text">
                    <h1>home holiday</h1>
                    <p></p>
                    <button className='hero-btn'>let's travel</button>
                </div>
            </div>
        )
    }
}