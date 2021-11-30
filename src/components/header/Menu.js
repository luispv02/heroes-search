import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <ul className="nav flex-column flex-md-row">
            <li className="nav-item my-4">
                <NavLink 
                    className="nav-link text-white" 
                    to='/'
                >Home</NavLink>
            </li>

            <li className="nav-item my-4">
                <NavLink 
                    className="nav-link text-white" 
                    to='/searchname'
                >Name</NavLink>
            </li>

            <li className="nav-item my-4">
                <NavLink 
                    className="nav-link text-white" 
                    to='/searchid'
                >ID</NavLink>
            </li>
        </ul>
    )
}

export default Menu
