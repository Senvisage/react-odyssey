import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Signup from "./containers/Signup";
import Signin from "./containers/Signin";
import Profile from "./containers/Profile";
import Notification from "./containers/Notification";

const theme = createMuiTheme();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Notification />
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
                      <Redirect exact from="/" to="/profile" />
                      <Route exact path="/profile" component={Profile} />
                      <Route exact path="/signin" component={Signin} />
                      <Route exact path="/signup" component={Signup} />
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
