import React from "react";
import Pari from "./Pari"
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import * as firebase from "firebase/app";

class Paris extends React.Component {

constructor(props) {
      super(props);
      this.state = {betLinkList :[],placeBet:[]}
   }

  componentDidMount() {
    //Get database content
     let url = this.props.route.url;
     var db = firebase.firestore();
     let betLinkList = [];
     let placedBet = [];
     db.collection("bets").get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         let link = url + "/" + doc.id;
         let description = doc.data().description;
         betLinkList.push({"link":link, "description":description, "betId" : doc.id});
         placedBet[doc.id] = doc.data().bets;
     });
     this.setState({betLinkList:betLinkList})
     this.setState({placedBet:placedBet})
   })
 }

 BetLink(link, description, betId) {
   return(
     <li key={link}>
     <Link to={link}>{description}</Link>
     </li>
   )
 }

render() {
  let url = this.props.route.url;
  let path = this.props.route.path;
  return (
    <div>
    <h2>Liste des Paris</h2>
    <ul>
      {this.state.betLinkList.map((bet, index) => this.BetLink(bet.link, bet.description, bet.betId))}
    </ul>

<Switch>
  <Route exact path={path}>
      <h3>Please select .</h3>
  </Route>
  <Route path={`${path}/:betId`}>
      <Pari placedBet={this.state.placedBet} />
  </Route>
</Switch>
    </div>
  )}
}

export default (props) => (
    <Paris
        {...props}
        route = {useRouteMatch()}
    />
);
