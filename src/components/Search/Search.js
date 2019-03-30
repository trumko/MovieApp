import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { connect } from "react-redux";

import './Search.scss';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchByType: 'title',
      inputQuery: '',
    };
  }

  componentDidMount() {
  }

  setSearchByType = (type) => {
    this.setState({
      searchByType: type
    });
  }

  onInputChange = (e) => {
    this.setState({
      inputQuery: e.currentTarget.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputQuery) {
      console.log('proceed with search')
      this.props.history.push('/movie/269149');
    }
  }

  render() {
    return (
      <div className='mr_search'>
        <h1>Find your movie</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="mr_searchInput"
            type="text"
            name="search-query"
            placeholder="search..."
            value={this.state.inputQuery}
            onChange={this.onInputChange}
          />
          <hr />
          <button className="mr_searchSubmit" type="submit" name="search">search</button>
          <div className="mr_searchSwitch">
            <span>Search by</span>
            <button
              type="button"
              className={this.state.searchByType === 'title' ? 'mr_isActiveType' : ''}
              onClick={() => this.setSearchByType('title')}
            >
              title
            </button>
            <button
              type="button"
              className={this.state.searchByType === 'genre' ? 'mr_isActiveType' : ''}
              onClick={() => this.setSearchByType('genre')}
            >
              genre
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  // getMovie: movieId => dispatch(getMovie(movieId))
})

const mapStateToProps = (state) => ({
 // movie: state.movieReducer.movie
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
