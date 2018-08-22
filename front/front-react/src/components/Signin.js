import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./Signin.css";

const DEFAULT_STATE = {
  email: "mon@email.com",
  password: "monPassw0rd",
  flash: ""
};
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
  }

  //------------------------------------------------------------------- Handlers
  onSubmit = event => {
    event.preventDefault();
    fetch("/auth/signin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => {
          this.setState({ flash: res.flash });
          this.setState({ resultSet: res });
          this.props.history.push("/profile");
        },
        err => {
          this.setState({ flash: err.flash });
        }
      );
  };
  updateEmail = event => {
    this.setState({ email: event.target.value });
  };
  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  //--------------------------------------------------------------------- Render
  render() {
    return (
      <div className="Signin">
        <h1>Sign in</h1>
        <blockquote>{JSON.stringify(this.state, 1, 1)}</blockquote>
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
          <Button color="primary" type="submit" value="Sign in !">
            Sign in !
          </Button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}
export default Signin;
