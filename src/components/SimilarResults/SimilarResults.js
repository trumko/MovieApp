import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import MoviePreview from 'components/MoviePreview/MoviePreview'

import './SimilarResults.scss';

export function SimilarResults({ similarResults }) {
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

const mapStateToProps = (state) => ({
  similarResults: state.movieReducer.similarResults
})

export default withRouter(connect(mapStateToProps, {})(SimilarResults))
