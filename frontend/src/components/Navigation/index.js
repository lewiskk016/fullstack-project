import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SearchBar from './SearchBar';
import AuthDropdown from './AuthDropdown';

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
        <LoginFormModal />
        <AuthDropdown />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <ul className="navigation-container">
      <li>
        <div className="navigation-row">
          <div className="navigation-item">
            <NavLink exact to="/">Home</NavLink>
          </div>
          <div className="navigation-item-search-bar-container">
            <SearchBar />
          </div>
          <div className="navigation-item-login-container">
            {sessionLinks}
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
