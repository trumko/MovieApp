import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import queryString from 'query-string';

import MoviePreview from 'components/MoviePreview/MoviePreview'
import { getSearchResults } from './actions'


import './SearchResults.scss';

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
      <div className="mr_moviePreviews">
        {searchResults.map(({ title, release_date, genres, poster_path, id }) => {
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
  getSearchResults: params => dispatch(getSearchResults(params))
})

const mapStateToProps = (state) => ({
 searchResults: state.searchResultsReducer.searchResults
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResults))
