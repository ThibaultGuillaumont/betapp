import React from "react";
import Pari from "./Pari"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export default function Paris() {

  let { path, url } = useRouteMatch();

  return (
    <div>
    <h2>Liste des Paris</h2>
    <ul>
      <li>
      <Link to={`${url}/sexe`}>Sexe du bébé</Link>
      </li>
      <li>
      <Link to={`${url}/taille`}>taille</Link>
      </li>
      <li>
      <Link to={`${url}/NicolasVsSouris`}>Nicolas contre les souris</Link>
      </li>
    </ul>


    <Switch>
  <Route exact path={path}>
    <h3>Please select .</h3>
  </Route>
  <Route path={`${path}/:betId`}>
    <Pari />
  </Route>
</Switch>
    </div>
  )
}


function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
