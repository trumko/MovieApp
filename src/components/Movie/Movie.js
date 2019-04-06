import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import { getMovieYear } from 'utils/helpers'
import { getMovie, getSimilarResults } from './actions'

import './Movie.scss';

export class Movie extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId)
  }

  componentDidUpdate() {
    if (this.props.movie) {
      const { movie, getSimilarResults } = this.props;
      getSimilarResults(movie.genres);
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
 movie: state.movieReducer.movie
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))
