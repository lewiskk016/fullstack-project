import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Splash from "./components/MainPage/";
import SubNavigation from "./components/SubNavigation";
import ItemsIndex from "./components/ItemsIndex";
import ItemShow from "./components/ItemShow";
import ShoppingListIndex from "./components/ShoppingList/ShoppingListIndex";
import Search from "./components/SearchResults";
import Category from "./components/Category/category";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <SubNavigation />
      <div className="content">
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/items" component={ItemsIndex} />
        <Route exact path="/items/:itemId" component={ItemShow} />
        <Route path="/items/category/:category" component={Category} />
        <Route exact path="/login" component={LoginFormPage} />
        <Route exact path="/signup" component={SignupFormPage} />
        <Route exact path="/searches/:query" component={Search} />
        <Route exact path="/shopping_lists" component={ShoppingListIndex} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
