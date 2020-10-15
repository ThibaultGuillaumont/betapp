import React from "react";
import PlaceBet from "./PlaceBet"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function PariLine(name, value, amount, index) {
  return (
    <tr key={index}>
    <td>{name}</td>
    <td>{value}</td>
    <td>{amount}</td>
    </tr>
  )
}

class Pari extends React.Component {

  constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {placedBet: [
      {name:"gilou", value:"garçon", amount:"20€"},
      {name: "bibi", value:"garçon", amount:"40€"}]
      }

      this.newBet = this.newBet.bind(this);

   }

  newBet(name, value, amount) {
      let bet = this.state.placedBet.slice();
      bet.push({"name": name, "value":value, "amount":amount});
      this.setState({placedBet:bet})
      console.log(this.state.placedBet)
    }

    render() {

    //get la liste des participants aux paris
    let userID = "userID";
    let choix = ["garçon", "fille"]
    return (
      <div>
      <h2> {this.props.param.betId} </h2>
      <table>
      <thead>
      <tr>
      <th>Participant</th>
      <th>Choix</th>
      <th>Montant</th>
      </tr>
      </thead>
      <tbody>
      {this.state.placedBet.map((bet, index) => PariLine(bet.name, bet.value, bet.amount, index))}
      </tbody>
      </table>
      <PlaceBet newBet={this.newBet} userID={userID} choix={choix} />
      </div>
  )
  }
}

export default (props) => (
    <Pari
        {...props}
        param={useParams()}
    />
);
