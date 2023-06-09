import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'
import './ProfileButton.css'
// import AuthDropdown from '../AuthDropdown/AuthDropdown';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <div className="profile-button-container">
      <div className="profile-button" onMouseOver={()=>{setShowMenu(true)}}></div>Hello, {user.name} <br></br> Account & Lists

      <button className="button" onClick={openMenu}>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button className="sign-out-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      </div>
    </>
  );
}

export default ProfileButton;
