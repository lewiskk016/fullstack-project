import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from './SearchBar';
import AuthDropdown from './AuthDropdown';
import alogo from '../../Images/a-logo.jpg'
// import Subnavigation from '../SubNavigation';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      // <ProfileButton user={sessionUser} />
      <AuthDropdown user ={sessionUser} />
    );
  } else {
    sessionLinks = (

      <>
        {/* <LoginFormModal /> */}
        <AuthDropdown />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <nav className="navigation-container">
        <div className="navigation-row">
          <div className="navigation-item">
            <NavLink exact to="/" className="navigation-home-link">
            <img className="alogos" src={alogo} alt="alogo" />
            </NavLink>
          </div>
          <div className="navigation-item-search-bar-container">
            <SearchBar />
          </div>
          <div className="navigation-item-login-container">
            {sessionLinks}
          </div>
        </div>
    </nav>
  );
}

export default Navigation;
