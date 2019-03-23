import React, { Component } from "react";
import MoviePreviews from 'сomponents/MoviePreviews/MoviePreviews';
import Header from 'сomponents/Header/Header';

export default class MoviePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="mr_content mr_container">
          <p>Movie page</p>
          <MoviePreviews />
        </div>
      </>
    );
  }
}
