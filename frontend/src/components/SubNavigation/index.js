import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SubNavigation.css';


function SubNavigation() {

    return (
        <nav className="sub-navigation-container">
            <div className="sub-navigation-row">
                <div className="sub-navigation-item">
                    <NavLink exact to="/products">All</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/5">Binoculars</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/0">Books</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/1">Feeders</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/2">Bird Seed</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/3">Bird Baths</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/products/4">Bird Houses</NavLink>
                </div>
                </div>
        </nav>
    )
}

export default SubNavigation
