import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ redirectTo, loggedIn, children }) {
    return (
      <Route>
        {() => (loggedIn ? children : <Redirect to={redirectTo} />)}
      </Route>
    );
  }
  

export default ProtectedRoute;