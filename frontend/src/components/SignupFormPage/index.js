import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { useHistory, useLocation } from "react-router-dom";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      try {
        await dispatch(sessionActions.signup({ email, username, password }));

        const previousPath = history.length > 1 ? history.goBack() : "/";
        history.push(previousPath);
      } catch (res) {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    } else {
      setErrors(['Confirm Password field must be the same as the Password field']);
    }
  };


  return (
    <>
    <div className="signup-form-page">
    <div className="signup-form-container">
      <h1 className="signup-form-header">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => <li key={error}>{error}</li>)}
        </ul>
        <label className="signup-form-label">
          Email</label>
          <input className="signup-form-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <label className="signup-form-label">
          Username</label>
          <input className="signup-form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        <label className="signup-form-label">
          Password</label>
          <input className="signup-form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <label className="signup-form-label">
          Confirm Password </label>
          <input className="signup-form-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        <button className="signup" type="submit">Sign Up</button>
        <div className="signup-link-container">
              <span>Already have an account? </span>
              <Link to="/login" className="login-link">
                Login
              </Link>
              <br></br>
              <hr></hr>
              <Link to="/">Cancel</Link>
            </div>
      </form>
    </div>
    </div>
    </>
  );
}

export default SignupFormPage;
