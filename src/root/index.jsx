import React from "react";
import { Navbar } from "../components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { navbar } from "../utils/Navbar";

export const Root = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {navbar.map((value) => {
            return (
              <Route
                key={value.id}
                path={value.path}
                component={value.component}
              />
            );
          })}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
