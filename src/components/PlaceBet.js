import React from "react";



export default class PlaceBet extends React.Component {

  constructor(props) {
   super(props);
   this.state = {value: '', option: this.props.choix[0]};
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




  render(props) {

    let userID = this.props.userID;
    let choix = this.props.choix;

    return(
    <div>
    <h2>Placer un nouveau pari</h2>
    <form onSubmit={(e) => {e.preventDefault(); this.props.newBet(userID, this.state.option, this.state.value)}}>
    {userID}
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
