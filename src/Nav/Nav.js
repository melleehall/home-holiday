import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logot.png'
import '../universalstyles.css'
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-container'>
                <NavLink to='/'>
                    <img src={logo} alt='home holiday logo' className='logo-transparent-bckgrnd'/>
                </NavLink>
                <NavLink to='/dashboard' className='nav-btn'> Demo </NavLink> 
                <NavLink to='/trips' className='nav-btn'> Trips List</NavLink> 
                <NavLink to='/add-trip' className='nav-btn'> Add Trip </NavLink> 
            </div>
        )
    }
}