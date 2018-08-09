import React, { Component } from 'react';
import './Signup.css';

const DEFAULT_STATE = {
  email: "mon@email.com",
  password: "monPassw0rd",
  passwordbis: "monPassw0rd",
  name: "James",
  lastname: "Bond"
}
class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }

  //------------------------------------------------------------------- Handlers
  onSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form :  ");
    console.log(this.state);
  }
  updateEmail = (event) => {
    this.setState({email: event.target.value});
  }
  updatePassword = (event) => {
    this.setState({password: event.target.value});
  }
  updatePasswordbis = (event) => {
    this.setState({passwordbis: event.target.value});
  }
  updateName = (event) => {
    this.setState({name: event.target.value});
  }
  updateLastname = (event) => {
    this.setState({lastname: event.target.value});
  }

  //--------------------------------------------------------------------- Render
  render() {
    //const {email} = this.state;
    return (
      <div className="Signup">
         <h1>{JSON.stringify(this.state,1,1)}</h1>
         <form onSubmit={this.onSubmit}>
           <input type="text" name="email" placeholder="Your E-mail" onChange={this.updateEmail} />
           <input type="password" name="password" placeholder="Your Password" onChange={this.updatePassword}/>
           <input type="password" name="passwordbis" placeholder="Your Password (check)" onChange={this.updatePasswordbis}/>
           <input type="text" name="name" placeholder="Your First Name" onChange={this.updateName} />
           <input type="text" name="lastname" placeholder="Your Last Name" onChange={this.updateLastname} />
           <input type="submit" value="Sign up !" />
         </form>
      </div>
    )
  }
}
export default Signup
