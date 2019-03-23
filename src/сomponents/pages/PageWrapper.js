import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import TestPage from "./components/TestPage";

export default class PageWrapper extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/1" component={MoviePage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    )
  }
}
