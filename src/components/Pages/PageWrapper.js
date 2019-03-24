import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./components/HomePage";
import MoviePage from "./components/MoviePage";
import TestPage from "./components/TestPage";

export default function PageWrapper() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:movie_id" component={MoviePage} />
      <Route path="/test" component={TestPage} />
    </Switch>
  )
}
