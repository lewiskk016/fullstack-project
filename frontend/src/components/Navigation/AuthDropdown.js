
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
        history.push("/login");
    };

    const handleSignUp = () => {
        handleMenuClose();
        history.push("/signup");
    };

    const handleLogout = () => {
        dispatch(logout())
          .then(() => {
            history.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <div className="auth-dropdown-container" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            {!sessionUser && (
                <>
            <h2 className="first-welcome-message">Hello, sign in Account & Lists</h2>
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
            <h2 className="second-welcome-message">Hello, {sessionUser.username}</h2>
            {showMenu && (
                <div className="dropdown-content">
                    <div className="Logout">
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
            </>
    )}
    </div>
    );
};

export default AuthDropdown;
