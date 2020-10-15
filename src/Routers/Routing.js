import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainContent } from "../container/Style";


import Header from "../CommonComponents/Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import SideBar from "../CommonComponents/SideBar/SideBar";


class Routing extends Component {
  render() {
    return (
      <React.Fragment>
          <SideBar />
          <MainContent>
            <Header />
            <Router>
              <Switch>
                <Route path="/dashBoard" exact component={Dashboard} />
              </Switch>
            </Router>
          </MainContent>
      </React.Fragment>
    );
  }
}

export default Routing;
