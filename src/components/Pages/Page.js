import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from "./components/HomePage";
import MoviePage from "./MoviePage/MoviePage";
import SearchPage from "./components/SearchPage";

export function Page({ location }) {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:movieId" component={MoviePage} key={location.pathname} />
      <Route path="/search" component={SearchPage} />
    </Switch>
  )
}

export default withRouter(Page)
