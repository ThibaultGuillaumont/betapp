import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Auth from "./Auth"

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


function Hello(props) {
  console.log(props.user)
  return (<React.Fragment>
    <h2>
    Hello {props.user.displayName}, voici ta page d'administration !
  </h2>
</React.Fragment> )
}

export default function UserPage() {
    var firebase = require('firebase');
    var user = firebase.auth().currentUser;
    let { uid } = useParams();
    let { path, url } = useRouteMatch();
    return (
      <Switch>
      <Route exact path={path}>
      <h3>Yo yo yo </h3>
      </Route>
      <Route path={`${path}/:uid`}>
      <Hello user={user} />
      </Route>
      </Switch>
  )
  }
