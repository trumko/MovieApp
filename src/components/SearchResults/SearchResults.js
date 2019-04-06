import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import queryString from 'query-string';

import MoviePreviews from 'components/MoviePreviews/MoviePreviews'
import { getSearchResults } from './actions'

export class SearchResults extends Component {
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    this.props.getSearchResults(params)
  }

  render() {
    const { searchResults } = this.props;

    if (!searchResults) {
      return null;
    }

    return (
      <MoviePreviews movies={searchResults} />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSearchResults: params => dispatch(getSearchResults(params))
})

const mapStateToProps = (state) => ({
 searchResults: state.searchResultsReducer.searchResults
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))
