import React, { Component } from "react";
import MoviePreviews from 'сomponents/MoviePreviews/MoviePreviews';
import Header from 'сomponents/Header/Header';

export default class MoviePage extends Component {
  render() {
    let movieId = this.props.match.params.movie_id;

    return (
      <>
        <Header />
        <div className="mr_content mr_container">
          <p>Movie page: {movieId}</p>
          <MoviePreviews />
        </div>
      </>
    );
  }
}
