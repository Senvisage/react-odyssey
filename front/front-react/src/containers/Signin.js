import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Signin extends Component {
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
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      })
      .then(
        res => {
          this.props.dispatch({
            type: "CREATE_SESSION",
            user: res.user,
            token: res.token,
            notification: { flash: res.flash, open: true }
          });

          //this.props.onLogIn(res);
          this.props.history.push("/profile");
        },
        err => {
          this.props.onLogIn({ flash: err.flash });
        }
      )
      .catch(err => this.props.onLogIn({ flash: err.message }));
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
export default connect()(Signin);
