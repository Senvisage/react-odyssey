import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import './Profile.css';

const DEFAULT_STATE = {
  email: "mon@email.com",
  name: "James",
  lastname: "Bond",
  flash: ""
}
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }

  //------------------------------------------------------------------- Handlers

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
      </div>
    )
  }
}
export default Profile
