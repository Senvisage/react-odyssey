import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import './App.css';
import Signup from './components/Signup'

const DEFAULT_STATE = {}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { ...DEFAULT_STATE }
  }
  render() {
    return (
      <MuiThemeProvider  >
          <Grid  container
            alignItems='center'
            style={{ height:  '100%' }}>
            <Grid  item  xs={12}>
              <Paper
                elevation={4}
                style={{ margin:  32 }}>
                  <Grid  container
                    alignItems='center'
                    justify='center'>
                      <Grid  item  xs={12}  sm={6}
                        style={{ 'text-align':  'center' }}>
                          <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />
                      </Grid>
                      <Grid  item  xs={12}  sm={6}
                        alignContent='center'>
                        <Signup  />
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
