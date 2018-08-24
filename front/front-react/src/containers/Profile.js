import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

class Profile extends Component {
  //------------------------------------------------------------------- Handlers
  onLogoutClick = event => {
    this.props.onLogOut({ flash: "User has been logged out !" });
    this.props.history.push("/");
  };

  //--------------------------------------------------------------------- Render
  render() {
    return (
      <div className="Profile">
        <h1>Mon Profil</h1>
        <List>
          <ListItem>
            <ListItemText>E-Mail: {this.props.email}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Name: {this.props.name}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Lastname: {this.props.lastname}</ListItemText>
          </ListItem>
        </List>
        <Button color="primary" onClick={this.onLogoutClick}>
          Log out !
        </Button>
      </div>
    );
  }
}
export default connect()(Profile);