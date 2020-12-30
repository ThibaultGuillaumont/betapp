import React from "react";
import {
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


function Hello(props) {
  return (<React.Fragment>
    <h2>
    Hello {props.user.displayName}, voici ta page d'administration !
  </h2>
</React.Fragment> )
}

export default function UserPage() {
    var user = firebase.auth().currentUser;
    let { uid } = useParams();
    let { path } = useRouteMatch();
    return (
      <Switch>
      <Route exact path={path}>
      <h3>Yo yo yo </h3>
      </Route>
      <Route path={`${path}/:uid`}>
      <h3>{uid}</h3>
      <Hello user={user} />
      </Route>
      </Switch>
  )
  }
