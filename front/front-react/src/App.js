import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Profile from "./containers/Profile";
import Notification from "./components/Notification";

const theme = createMuiTheme();
const DEFAULT_STATE = {
  profile: {
    id: null,
    email: "",
    password: "",
    passwordbis: "",
    name: "",
    lastname: ""
  },
  notification: {
    open: false,
    flash: ""
  },
  token: undefined
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
  }

  notificationHandleClose = data => {
    this.setState({
      notification: { flash: this.state.notification.flash, open: false }
    });
  };

  profileHandleLogOut = data => {
    this.setState({
      notification: { flash: data.flash, open: true },
      profile: DEFAULT_STATE.profile,
      token: DEFAULT_STATE.token
    });
  };

  signinHandleLogIn = data => {
    this.setState({
      notification: { flash: data.flash, open: true },
      profile: data.user,
      token: data.token
    });
  };

  signHandleSignUp = data => {
    this.setState({
      notification: { flash: data.flash, open: true },
      profile: DEFAULT_STATE.profile,
      token: DEFAULT_STATE.token
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Notification
          flash={this.state.notification.flash}
          open={this.state.notification.open}
          onClose={this.notificationHandleClose}
        />
        <Grid container alignItems="center" style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper elevation={4} style={{ margin: 32 }}>
              <Grid
                container
                alignItems="center"
                justify="center"
                alignContent="center"
              >
                <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
                  <img
                    alt=""
                    src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <BrowserRouter>
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={props => (
                          <Signin
                            {...props}
                            email={this.state.profile.email}
                            name={this.state.profile.name}
                            lastname={this.state.profile.lastname}
                            onLogIn={this.signinHandleLogIn}
                          />
                        )}
                      />
                      <Route
                        path="/signup"
                        render={props => (
                          <Signup
                            {...props}
                            email={this.state.profile.email}
                            name={this.state.profile.name}
                            lastname={this.state.profile.lastname}
                            onSignUp={this.signHandleSignUp}
                          />
                        )}
                      />
                      <Route
                        path="/signin"
                        render={props => (
                          <Signin
                            {...props}
                            email={this.state.profile.email}
                            name={this.state.profile.name}
                            lastname={this.state.profile.lastname}
                            onLogIn={this.signinHandleLogIn}
                          />
                        )}
                      />
                      <Route
                        path="/profile"
                        render={props => (
                          <Profile
                            {...props}
                            email={this.state.profile.email}
                            name={this.state.profile.name}
                            lastname={this.state.profile.lastname}
                            onLogOut={this.profileHandleLogOut}
                          />
                        )}
                      />
                    </Switch>
                  </BrowserRouter>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
