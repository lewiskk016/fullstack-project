import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Splash from "./components/MainPage/";
import SubNavigation from "./components/SubNavigation";
import ItemsShow from "./components/ItemsShow";

function App() {
  return (
    <>
    <div className="app">
      <Navigation />
      <SubNavigation/>
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
            <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/items">
            <ItemsShow />
          </Route>
        </Switch>
          </div>
        <Splash />

    </>
  );
}


export default App;
