import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import { getMovieYear } from 'utils/helpers'
import { getMovie, getSimilarResults } from './actions'
import { selectMovie } from './selectors'

import './Movie.scss';

export class Movie extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId)
  }

  componentDidUpdate(prevProps) {
    const currentMovie = this.props.movie || {};
    const previosMovie = prevProps.movie || {};

    if (currentMovie.id && (!previosMovie.id || currentMovie.id !== previosMovie.id)) {
      const { movie, getSimilarResults } = this.props;
      getSimilarResults(movie);
    }
  }

  render() {
    const { movie } = this.props;

    if (!movie) {
      return null;
    }

    const { title, release_date, poster_path, tagline, runtime, overview, vote_average } = movie;
    const movieYear = getMovieYear(release_date);
    return (
      <div className="mr_movie">
        <div className="mr_poster">
          <img src={poster_path} alt={title} />
        </div>
        <div className="mr_movieDetails">
          <h1>{title}</h1>
          <span className="mr_voteAvarage">{vote_average}</span>
          <p className="mr_tagLine">{tagline}</p>
          <div>
            <p className="mr_movieYear">{movieYear}</p>
            <p className="mr_runtime">{runtime} min</p>
          </div>
          <p className="mr_overview">{overview}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovie: movieId => dispatch(getMovie(movieId)),
  getSimilarResults: (genres) => dispatch(getSimilarResults(genres)),
})

const mapStateToProps = (state) => ({
  movie: selectMovie(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))
