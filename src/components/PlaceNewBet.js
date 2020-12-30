import React from "react";

import * as firebase from "firebase/app";

export default class PlaceNewBet extends React.Component {

  constructor(props) {
   super(props);
   let choix = "";
   this.props.choix ? choix = this.props.choix[0] : choix = "";
   this.state = {value: '', option: choix}
   this.handleChange = this.handleChange.bind(this);
   this.handleChangeOption = this.handleChangeOption.bind(this); }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleChangeOption(event) {
   this.setState({option: event.target.value});
 }


 MakeOption(choix) {
   return <option value={choix} key={choix}>{choix}</option>;
 }

 componentDidUpdate() {
   if (this.props.choix && this.state.option==="") {this.setState({option : this.props.choix[0]})} ;
 }




  render(props) {

    var user = firebase.auth().currentUser;
    let choix = [];
    this.props.choix ? choix = this.props.choix : choix =[];

    return(
    <div>
    <h2>Placer un nouveau pari</h2>
    <form onSubmit={(e) => {e.preventDefault(); this.props.newBet(user, this.state.option, this.state.value, this.props.param)}}>
    {user ? user.displayName : ""}
    <select value={this.state.option || choix[0]} onChange={this.handleChangeOption}>
           {choix.map(this.MakeOption)}
   </select>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <input type="submit" value="Envoyer" />
    </form>
    </div>
  )
}
}
