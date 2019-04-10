import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import MoviePreviews from 'components/MoviePreviews/MoviePreviews'
import { selectSimilarResults } from 'components/Movie/selectors'

export function SimilarResults({ similarResults }) {
  if (!similarResults) {
    return null;
  }

  return (
    <MoviePreviews movies={similarResults} />
  )
}

const mapStateToProps = (state) => ({
  similarResults: selectSimilarResults(state)
})

export default withRouter(connect(mapStateToProps, {})(SimilarResults))
