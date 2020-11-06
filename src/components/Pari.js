import React from "react";
import PlaceBet from "./PlaceBet"
import {
  useParams
} from "react-router-dom";
import * as firebase from "firebase/app";

function PariLine(name, value, bet, index) {
  return (
    <tr key={index}>
    <td>{name}</td>
    <td>{value}</td>
    <td>{bet}</td>
    </tr>
  )
}

class Pari extends React.Component {

  constructor(props) {
      super(props);
      this.newBet = this.newBet.bind(this)
      placedBet:this.props.placedBet ? this.state = {placedBet:this.props.placedBet[this.props.param.betId]} : this.state = {placedBet:[]}
   }

  newBet(name, value, bet) {
      let betList = this.state.placedBet.slice();
      betList.push({"name": name, "value":value, "bet":bet});
      this.setState({placedBet:betList})
      //TO do : Update the database
    }
    componentDidMount() {
      //this.setState({placedBet:this.props.placedBet[this.props.param.betId]});
    }

    componentDidUpdate(prevProps) {
    //If route change, update table
  if (this.props.param.betId !== prevProps.param.betId) {
    this.setState({placedBet:this.props.placedBet[this.props.param.betId]});
  }
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
      {this.state.placedBet ? this.state.placedBet.map((bet, index) => PariLine(bet.name, bet.answer, bet.value, index)): "plop"}
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
