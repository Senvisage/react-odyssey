import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { changeFlash, updateUser, deleteSession, deleteUser } from "../actions";

function mapStateToProps(state) {
  return {
    flash: state.flash,
    user: state.user,
    auth: state.auth
  };
}

class Profile extends Component {
  constructor(props) {
    super(props);
    fetch("/profile", {
      headers: {
        Authorization: "Bearer " + this.props.auth.token
      }
    })
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error(res.statusText);
      })
      .then(res => {
        this.props.dispatch(
          changeFlash(
            "Gathered data for user '" + res.name + " " + res.lastname + "'"
          )
        );
        this.props.dispatch(updateUser(res));
      })
      .catch();
  }
  //------------------------------------------------------------------- Handlers
  onLogoutClick = event => {
    this.props.dispatch(deleteSession());
    this.props.dispatch(changeFlash("User has been logged out !"));
    this.props.dispatch(deleteUser());
    this.props.history.push("/signin");
  };

  //--------------------------------------------------------------------- Render
  render() {
    return (
      <div className="Profile">
        <h1>Mon Profil</h1>
        <List>
          <ListItem>
            <ListItemText>E-Mail: {this.props.user.email}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Name: {this.props.user.name}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Lastname: {this.props.user.lastname}</ListItemText>
          </ListItem>
        </List>
        <Button color="primary" onClick={this.onLogoutClick}>
          Log out !
        </Button>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Profile);
