import React, { useState } from "react";
import SignupFomPage from "../SignupFormPage";
import LoginFormPage from "../LoginFormPage";

const AuthDropdown = () => {
    const [showMenu, setShowMenu] = useState(false);

const toggleDropdown = () => {
    setShowMenu(!showMenu);
}

return (
    <div className="auth-dropdown">
        <button onClick={toggleDropdown}>Hello, sign in</button>
        {showMenu && (
            <div className="dropdown-content">
                <LoginFormPage />
                <SignupFomPage />
            </div>
        )}
    </div>
);
};

export default AuthDropdown;
