// import React, { useState } from "react";
// import SignupFomPage from "../SignupFormPage";
// import LoginFormPage from "../LoginFormPage";
// import './auth.css'

// const AuthDropdown = () => {
//     const [showMenu, setShowMenu] = useState(false);

// const toggleDropdown = () => {
//     setShowMenu(!showMenu);
// }

// const handleMenuClose = () => {
//     setShowMenu(false);
// }

// return (
//     <div className="auth-dropdown">
//         <button onClick={toggleDropdown}>Hello, sign in</button>
//         {showMenu && (
//             <div className="dropdown-content" onClick={handleMenuClose}>
//                 <LoginFormPage />
//                 <SignupFomPage />
//             </div>
//         )}
//     </div>
// );
// };

// export default AuthDropdown;




// import React, { useState } from "react";
// import SignupFormPage from "../SignupFormPage";
// import LoginFormPage from "../LoginFormPage";
// import './auth.css';

// const AuthDropdown = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const handleMenuOpen = () => {
//         setShowMenu(true);
//     };

//     const handleMenuClose = () => {
//         setShowMenu(false);
//     };

//     return (
//         <div className="auth-dropdown" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
//             <button>Hello, sign in</button>
//             {showMenu && (
//                 <div className="dropdown-content">
//                     <div>
//                         <button onClick={() => { handleMenuClose(); /* Add redirection logic here */ }}>
//                             Sign In
//                         </button>
//                     </div>
//                     <div>
//                         <button onClick={() => { handleMenuClose(); /* Add redirection logic here */ }}>
//                             Sign Up
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AuthDropdown;









import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignupFormPage from "../SignupFormPage";
import LoginFormPage from "../LoginFormPage";
import './auth.css';

const AuthDropdown = () => {
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

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

    return (
        <div className="auth-dropdown-container" onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
            <button>Hello, sign
            Account & Lists</button>
            {showMenu && (
                <div className="dropdown-content">
                    <div className="SignIn">
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                    <div className="StartHere">
                        <button onClick={handleSignUp}>New Customer? Start here.</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthDropdown;
