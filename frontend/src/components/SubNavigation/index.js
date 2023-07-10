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
                    <NavLink exact to="/items/category/Binoculars">Binoculars</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/category/Books">Books</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/category/Feeder">Feeders</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/category/Seed">Seed</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/category/Bath">Baths</NavLink>
                </div>
                <div className="sub-navigation-item">
                    <NavLink exact to="/items/category/Houses">Houses</NavLink>
                </div>
                </div>
        </nav>
    )
}

export default SubNavigation
