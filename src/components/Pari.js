import React from "react";
import PlaceNewBet from "./PlaceNewBet"
import {
  useParams
} from "react-router-dom";
import * as firebase from "firebase/app";





function PariLine(name, answer, bet, index) {
  return (
    <tr key={index}>
    <td>{name}</td>
    <td>{answer}</td>
    <td>{bet}</td>
    </tr>
  )
}

function newBet(user, value, bet, param) {
  //Now to save it in the database
  //get document of bets
  var db = firebase.firestore();
  console.log("bets/" + param.betId + "/bets")
  db.collection("bets/" + param.betId + "/bets").doc(user.uid).set({
    "answer": value,
    "name": user.displayName,
    "value": bet
  })
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

function Pari(props)  {
    //get la liste des participants aux paris
    let userID = "userID";
    let choix = [];
    props.choix ? choix = props.choix[props.param.betId] : choix = [];
    let placedBet = props.placedBet;


    return (
      <div>
      <h2>{props.description}</h2>
      <table>
      <thead>
      <tr>
      <th>Participant</th>
      <th>Choix</th>
      <th>Montant</th>
      </tr>
      </thead>
      <tbody>
      {placedBet ? placedBet.map((bet) => PariLine(bet.data.name, bet.data.answer, bet.data.value, bet.id)): "plop"}
      </tbody>
      </table>
      <PlaceNewBet newBet={newBet} userID={userID} choix={choix} param={props.param}/>
      </div>
  )
  }

export default (props) => (
    <Pari
        {...props}
        param={useParams()}
    />
);
