import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";

const theme = createMuiTheme();
const DEFAULT_STATE = {};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...DEFAULT_STATE };
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
                      <Route exact path="/" component={Signin} />
                      <Route path="/signup" component={Signup} />
                      <Route path="/signin" component={Signin} />
                      <Route path="/profile" component={Profile} />
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
