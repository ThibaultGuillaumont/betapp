import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Home, About, Paris, SideMenu, UserPage} from "./components"

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';


const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(firebaseApp);
//var user = firebase.auth().currentUser;

//console.log(user)
var db = firebase.firestore();
db.collection("bets").get().then((querySnapshot) => {
querySnapshot.forEach((doc) => {
console.log(`${doc.id} => ${doc.data()}`);
  });
});


export default function App() {


  return (
    <Router>
      <div id="outer-container">
      <SideMenu />
        <main id="page-wrap">
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>

      </div>
    </Router>
  );
}
