import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { changeFlash } from "../actions";

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
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      })
      .then(
        res => {
          this.props.dispatch(changeFlash(res.flash));
          this.props.history.push("/signin");
        },
        err => {
          this.props.dispatch(changeFlash("Une erreur inconnue est survenue"));
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
export default connect()(Signup);
