import React from 'react'
import { NavLink } from 'react-router-dom'

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    
    return (
        <nav className={drawerClasses}>
            <ul className='side-drawer-items'>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                <li><NavLink to='/trips'>Trip List</NavLink></li>
                <li><NavLink to='/add-trip'>Add Trip</NavLink></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;