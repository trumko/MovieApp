import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import SearchPage from "./components/SearchPage";
import NotFoundPage from "./components/NotFoundPage";

export function Page({ location }) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:movieId" component={MoviePage} key={location.key} />
      <Route path="/search" component={SearchPage} key={location.key} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default withRouter(Page)
