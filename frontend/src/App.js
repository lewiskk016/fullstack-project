import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage/HomePage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <div className="app">
      <Navigation />
        <HomePage />

        <Switch>
          <Route path="/login" >
            <LoginFormPage />

          </Route>

            <Route path="/signup">

            <SignupFormPage />
          </Route>
        </Switch>
          </div>
    </>
  );
}


export default App;
