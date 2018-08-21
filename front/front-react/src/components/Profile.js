import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import './Profile.css';

const DEFAULT_STATE = {
  email: "",
  name: "",
  lastname: "",
  flash: ""
}
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }

  //------------------------------------------------------------------- Handlers

  onLogoutClick = (event) => {
    console.log("Disconnected");
    this.props.history.push('/');
  }

  //--------------------------------------------------------------------- Render
  render() {
    return (
      <div className="Profile">
        <h1>Mon Profil</h1>
        <blockquote>{JSON.stringify(this.state,1,1)}</blockquote>
        <List>
          <ListItem><ListItemText>E-Mail: {this.state.email}</ListItemText></ListItem>
          <ListItem><ListItemText>Name: {this.state.name}</ListItemText></ListItem>
          <ListItem><ListItemText>Lastname: {this.state.lastname}</ListItemText></ListItem>
        </List>
        <Button color="primary" onClick={this.onLogoutClick} >Log out !</Button>
      </div>
    )
  }
}
export default Profile
