import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home, About, Paris, Pari, SideMenu} from "./components"


export default function App() {
  return (
    <Router>
      <div id="outer-container">
      <SideMenu />
        <main id="page-wrap">

        <h1>Titre de mon Site</h1>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/paris">
            <Paris />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>

      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}
