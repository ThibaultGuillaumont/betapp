import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'firebaseui/dist/firebaseui.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home, About, Paris, SideMenu, UserPage} from "./components"

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';


const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
//var user = firebase.auth().currentUser;

//console.log(user)



export default function App() {
  const [user] = useAuthState(firebaseApp.auth());
  return (
    <Router>
      <div id="outer-container">
      <SideMenu />
        <main id="page-wrap">
          <div class="main_page">
        <h1>Faites vos prévisions</h1>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/paris">
            <Paris />
          </Route>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route path="*">
            <div>What?</div>
          </Route>
        </Switch>
        </div>
        </main>

      </div>
    </Router>
  );
}
