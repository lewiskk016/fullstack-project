import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Splash from "./components/MainPage/";
import SubNavigation from "./components/SubNavigation";
import ItemsIndex from "./components/ItemsIndex";
import ItemShow from "./components/ItemShow";

// function App() {
//   return (
//     <>
//     <div className="app">
//       <Navigation />
//       <SubNavigation/>
//         <Switch>
//           <Route path="/login" >
//             <LoginFormPage />
//           </Route>
//             <Route path="/signup">
//             <SignupFormPage />
//           </Route>
//           <Route path="/items">
//             <ItemsShow />
//           </Route>
//         </Switch>
//           </div>
//         <Splash />

//     </>
//   );
// }


// export default App;



function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navigation />
      <SubNavigation />
      <Switch>
      <Route path="/items/:itemId">
          <ItemShow />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/items">
          <ItemsIndex />
        </Route>

      </Switch>
      {!location.pathname.includes("/items") && <Splash />}
      {/* < Route path="/">
        <Splash />
        </Route> */}
    </div>
  );
}

export default App;
