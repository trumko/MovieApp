import React, { Component } from "react";
import MoviePreviews from "сomponents/MoviePreviews/MoviePreviews";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <p>Home page</p>
        <MoviePreviews />
      </div>
    );
  }
}
