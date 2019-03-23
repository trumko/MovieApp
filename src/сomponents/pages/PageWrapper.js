import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";

export default class Page extends Component {
  render() {
    return (
      <div className="mr_content">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/test" component={TestPage} />
        </Switch>
      </div>
    )
  }
}
