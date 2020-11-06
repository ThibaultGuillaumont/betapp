import React from "react";
import {
  Link
} from "react-router-dom";
import Auth from "./Auth"

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function Hello(props) {
  console.log(props.user)
  return (<React.Fragment>
    <h2>
    Hello {props.user.displayName}
  </h2>
  <Link id="home" className="menu-item" to={"/user/" + props.user.uid} >Page utilisateur</Link>
</React.Fragment> )
}

  export default function Home({user}) {
    return (
      <div>
      {user ? <Hello user={user} /> : <Auth />}
      </div>
  )
  }
