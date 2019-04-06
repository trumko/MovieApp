import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import './Search.scss';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'title',
      inputQuery: '',
    };
  }

  setSearchByType = (type) => {
    this.setState({ type: type });
  }

  onInputChange = (e) => {
    this.setState({
      inputQuery: e.currentTarget.value
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputQuery) {
      this.props.history.push(`/search?search=${this.state.inputQuery}&genre=${this.state.type}`);
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
              className={this.state.type === 'title' ? 'mr_isActiveType' : ''}
              onClick={() => this.setSearchByType('title')}
            >
              title
            </button>
            <button
              type="button"
              className={this.state.type === 'genres' ? 'mr_isActiveType' : ''}
              onClick={() => this.setSearchByType('genres')}
            >
              genre
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Search)
