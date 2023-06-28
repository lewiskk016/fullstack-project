import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './LoginForm.css';
import { useHistory, useLocation } from "react-router-dom";
import { useRef } from "react";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const prevPathRef = useRef("");

  if (sessionUser) return <Redirect to="/" />;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    prevPathRef.current = location.state?.from || "";

    try {
      await dispatch(sessionActions.login({ credential, password }));
      const previousPath = history.length > 1 ? history.goBack() : "/";
      history.push(previousPath);
      history.push(prevPathRef.current || "/");
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
  };


  return (
    <>
    <div className="login-form-page">
    <div className="login-form-container">
      <h1 className="login-form-header">Sign In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label className="login-form-label">
          Username</label>
          <input className="login-form-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        <label className="login-form-label">
          Password</label>
          <input className="login-form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button className="continue" type="submit">Continue</button>
        <div className="demo-user-container">
        <label className="Demo-User"></label>
        <button className="demo" type="submit" onClick={() => { setCredential("Demo-User"); setPassword("password"); }}>Demo User</button>
        </div>
        <div className="signup-link-container">
              <span>Don't have an account?</span>
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
              <br></br>
              <hr></hr>
              <Link to={prevPathRef.current || "/"}>Cancel</Link> {/* Update cancel link */}
            </div>
      </form>
      </div>
      </div>
    </>
  );
}

export default LoginFormPage;
