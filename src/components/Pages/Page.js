import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";

export default function Page() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:movieId" component={MoviePage} />
    </Switch>
  )
}