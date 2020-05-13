import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo from '../Images/logot.png'
import './NavTwo.css'


export default class Nav extends Component {

    render() {
        return (
            <header className='toolbar'>
                <NavLink to='/'>
                    <img src={logo} alt='home holiday logo' className='logo-transparent-bckgrnd'/>
                </NavLink>
                <div className='toolbar_toggle-button'>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                </div>
                <nav className='toolbar_navigation'>
                    <div className='toolbar_navigation-items'>
                        <ul>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li><NavLink to='/trips'>Trips List</NavLink></li>
                            <li><NavLink to='/add-trip'>Add Trip</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
