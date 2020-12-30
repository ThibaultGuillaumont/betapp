import React from "react";
import {
  Link
} from "react-router-dom";
import Auth from "./Auth"
import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";


function logOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

function Hello(props) {
  return (<React.Fragment>
    <h2>
    Hello {props.user.displayName}
  </h2>
  <Link id="home" className="menu-item" to={"/user/" + props.user.uid} >Page utilisateur</Link><br/>
  <Link to={"/home"} onClick={() => logOut()}>log out</Link>

  <h2>Acceder aux paris</h2>
      <Link id="paris" className="menu-item" to="/paris">Paris</Link>
</React.Fragment> )
}

  export default function Home({user}) {
    return (
      <div>
      {user ? <Hello user={user} /> : <Auth />}
      </div>
  )
  }
