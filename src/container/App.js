import React from "react";

import "font-awesome/css/font-awesome.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

import theme from "../Theme/theme";

import { AppWrap } from "./Style";

import Routing from "../Routers/Routing";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return (
    <AppWrap>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                path={["/dashBoard", "/explore AI", "/viewCaseStudy"]}
                exact
                render={() =>
                  this.state.user ? <Routing /> : <Redirect to="/" />
                }
              />
            </Switch>
          </Router>
        </ThemeProvider>
    </AppWrap>
    );
  }
}

export default App;
