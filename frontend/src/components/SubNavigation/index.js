import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import './SubNavigation.css';


function SubNavigation() {

    return (
        <nav className="sub-navigation-container">
            <div className="sub-navigation-row">
                <div className="sub-navigation-item">
                    <NavLink exact to="/items">All</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/1">Binoculars</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/2">Books</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/3">Feeders</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/4">Seed</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/5">Baths</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/6">Houses</NavLink>
                </div>
                </div>
        </nav>
    )
}

export default SubNavigation
