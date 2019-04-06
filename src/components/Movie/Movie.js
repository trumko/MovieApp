import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import { clearSimilarResults } from 'components/SimilarResults/actions'
import { getMovieYear } from 'utils/helpers'
import { getMovie, clearMovie } from './actions'

import './Movie.scss';

export class Movie extends Component {
  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.clearMovie();
    this.props.clearSimilarResults();
    this.props.getMovie(movieId)
  }

  componentDidUpdate(prevProps) {
    const previosMovieId = prevProps.match.params.movieId;
    const currentMovieId = this.props.match.params.movieId;

    if (previosMovieId !== currentMovieId) {
      window.scrollTo(0, 0);
      this.props.clearMovie();
      this.props.clearSimilarResults();
      this.props.getMovie(currentMovieId);
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
  clearMovie: () => dispatch(clearMovie()),
  clearSimilarResults: () => dispatch(clearSimilarResults())
})

const mapStateToProps = (state) => ({
 movie: state.movieReducer.movie
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))
