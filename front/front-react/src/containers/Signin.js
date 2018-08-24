import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { changeFlash, createSession } from "../actions";

function mapStateToProps(state) {
  return {
    flash: state.flash,
    user: state.user,
    auth: state.auth
  };
}

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
          this.props.dispatch(changeFlash(res.flash));
          this.props.dispatch(createSession(res.token));
          this.props.history.push("/profile");
        },
        err => {
          this.props.dispatch(changeFlash(err.flash));
        }
      )
      .catch(err => this.props.dispatch(changeFlash(err.flash)));
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
export default connect(mapStateToProps)(Signin);
