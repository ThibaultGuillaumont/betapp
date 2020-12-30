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
      this.state = {betLinkList :[],placedBet:[],choix:[]}
   }

  componentDidMount() {
    //Get database content
     let url = this.props.route.url;
     var db = firebase.firestore();
     let betLinkList = [];
     let placedBet = [];
     let choix = [];

     //get List of on going bets
     db.collection("bets").get().then((querySnapshot) => {
       querySnapshot.forEach((doc) => {
         let link = url + "/" + doc.id;
         let description = doc.data().description;
         choix[doc.id] = doc.data().choix
         betLinkList.push({"link":link, "description":description, "betId" : doc.id});
     });
     this.setState({betLinkList:betLinkList})
     this.setState({placedBet:placedBet})
     this.setState({choix:choix})
   })
 }

 BetLink(link, description, betId) {
   return(
     <li key={link} onClick={() => this.getPlacedBets(betId, description)}>
     <Link to={link} >{description}</Link>
     </li>
   )
 }


  getPlacedBets(betId, description) {
  let placedBet= [];
  var db = firebase.firestore();
  db.collection("bets/" + betId + "/bets").get().then((betSnapshot) => {
    betSnapshot.forEach((bet) => {
      
      placedBet.push({"id" : bet.id, "data" : bet.data()})
    })
    if (this.state.placedBet !== placedBet) {
    this.setState({"betDescription" : description})
    this.setState({"placedBet": placedBet});
    console.log(description);
    }
   })
  }


render() {

  let choix = this.state.choix;

  let path = this.props.route.path;

  return (
    <div>
    <h2>Liste des Paris</h2>
    <ul>
      {this.state.betLinkList.map((bet) => this.BetLink(bet.link, bet.description, bet.betId))}
    </ul>

<Switch>
  <Route exact path={path}>
      <h3>Please select .</h3>
  </Route>
  <Route path={`${path}/:betId`}>
      <Pari choix={choix} placedBet={this.state.placedBet} description={this.state.betDescription} />
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
