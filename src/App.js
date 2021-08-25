import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Login from './components/auth/Login';
import Verify from './components/auth/Verify';
import Home from "./container/home/Home";

function App() {
  return (
    <BrowserRouter >
      <Switch>
      <Route path = "/home" component={Home} />
        <Route path = "/verify" component={Verify} />
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
