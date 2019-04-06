import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import MoviePreview from 'components/MoviePreview/MoviePreview'
import { getSimilarResults, clearSimilarResults } from './actions'

import './SimilarResults.scss';

export class SimilarResults extends Component {
  componentDidMount() {
    console.log(1);
    if (this.props.movie && !this.props.similarResults === null) {
      this.props.getSimilarResults(this.props.movie.genres);
    }
  }

  componentDidUpdate() {
    console.log(2);

    if (this.props.movie && this.props.similarResults === null) {
      console.log(2.1);
      this.props.getSimilarResults(this.props.movie.genres);
    }
  }

  render() {
    const { similarResults } = this.props;

    if (!similarResults) {
      return null;
    }

    return (
      <div className="mr_moviePreviews">
        {similarResults.map(({ title, release_date, genres, poster_path, id }) => {
          return (
            <MoviePreview
              title={title}
              date={release_date}
              genres={genres}
              posterUrl={poster_path}
              key={id}
              id={id}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSimilarResults: params => dispatch(getSimilarResults(params)),
  clearSimilarResults: () => dispatch(clearSimilarResults())
})

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
  similarResults: state.similarResultsReducer.similarResults
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SimilarResults))
