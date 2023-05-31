
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import SignupFormPage from "../SignupFormPage";
// import LoginFormPage from "../LoginFormPage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import './AuthDropdown.css';

const AuthDropdown = () => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const handleMenuOpen = () => {
        setShowMenu(true);
    };

    const handleMenuClose = () => {
        setShowMenu(false);
    };

    const handleSignIn = () => {
        handleMenuClose();
        history.push("/login"); // Redirect to the login page
    };

    const handleSignUp = () => {
        handleMenuClose();
        history.push("/signup"); // Redirect to the signup page
    };

    const handleLogout = () => {
        dispatch(logout())
          .then(() => {
            // Perform any additional actions after logout (e.g., redirect)
            history.push("/"); // Redirect to the desired page after logout
          })
          .catch((err) => {
            // Handle any errors that occurred during logout
            console.log(err);
          });
      };

    return (
        <div className="auth-dropdown-container" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            {!sessionUser && (
                <>
            <h2 className="welcome-message">Hello, sign in</h2>
            <h3 className="sub-welcome-message">Account & Lists</h3>
        {/* </div> */}

            {/* <button>Hello, sign
            Account & Lists</button> */}
            {showMenu && (
                <div className="dropdown-content">
                    <div className="SignIn">
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                    <div className="StartHere">
                        New Customer?
                        <button onClick={handleSignUp}> Start here.</button>
                    </div>
                </div>
            )}
        </>
    )}
    {sessionUser && (
        <>
            <h2 className="welcome-message">Hello, {sessionUser.username}</h2>
            <h3 className="sub-welcome-message">Account & Lists</h3>
            {showMenu && (
                <div className="dropdown-content">
                    <div className="Logout">
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
            </>
    )}
    </div>
    );
};

export default AuthDropdown;
