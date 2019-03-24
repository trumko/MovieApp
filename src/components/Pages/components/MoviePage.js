import React, { Component } from "react";
import MoviePreviews from 'components/MoviePreviews/MoviePreviews';
import Header from 'components/Header/Header';

export default class MoviePage extends Component {
  componentWillUnmount() {
    console.log('unmount MoviePage');
  }

  render() {
    // console.log(this.props)
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
