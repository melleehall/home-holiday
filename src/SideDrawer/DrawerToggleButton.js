import React from 'react'
import './DrawerToggleButton.css'

function drawerToggleButton (props) {
    return (
        <div>
            <button className='toggle-button' id='menu-toggle' aria-label='Open the menu' onClick={props.click}>
                <div className='toggle-button_line' aria-hidden='true'/>
                <div className='toggle-button_line'aria-hidden='true'/>
                <div className='toggle-button_line'aria-hidden='true'/>
            </button>
        </div>
    )
} 

export default drawerToggleButton