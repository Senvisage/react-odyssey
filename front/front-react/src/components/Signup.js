import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./Signup.css";

class Signup extends Component {
  //------------------------------------------------------------------- Handlers
  onSubmit = event => {
    event.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => {
          this.props.onSignUp(res);
          this.props.history.push("/signin");
        },
        err => {
          console.log("Got an error while signing up ! [Signup]");
        }
      );
  };
  updateEmail = event => {
    this.setState({ email: event.target.value });
  };
  updatePassword = event => {
    this.setState({ password: event.target.value });
  };
  updatePasswordbis = event => {
    this.setState({ passwordbis: event.target.value });
  };
  updateName = event => {
    this.setState({ name: event.target.value });
  };
  updateLastname = event => {
    this.setState({ lastname: event.target.value });
  };

  //--------------------------------------------------------------------- Render
  render() {
    return (
      <div className="Signup">
        <h1>Sign up</h1>
        <form onSubmit={this.onSubmit}>
          <TextField
            type="text"
            name="email"
            placeholder="Your E-mail"
            onChange={this.updateEmail}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={this.updatePassword}
          />
          <TextField
            type="password"
            name="passwordbis"
            placeholder="Your Password (check)"
            onChange={this.updatePasswordbis}
          />
          <TextField
            type="text"
            name="name"
            placeholder="Your First Name"
            onChange={this.updateName}
          />
          <TextField
            type="text"
            name="lastname"
            placeholder="Your Last Name"
            onChange={this.updateLastname}
          />
          <Button color="primary" type="submit" value="Sign up !">
            Sign up !
          </Button>
        </form>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }
}
export default Signup;
