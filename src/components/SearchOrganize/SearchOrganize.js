import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from 'classnames'

import { sortSearchResults } from 'components/SearchResults/actions'

import './SearchOrganize.scss';

export class SearchOrganize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'release date',
    };
  }

  setSortByType = (type) => {
    this.props.sortSearchResults(type);
    this.setState({ type: type });
  }

  render() {
    return (
      <div className="mr_container mr_searchOrganizer">
        <div className="mr_sortSwitch">
          <span>Sort by</span>
          <button
            type="button"
            className={classnames({'mr_isActiveType': this.state.type === 'release date'})}
            onClick={() => this.setSortByType('release date')}
            data-search-type="release date"
          >
            release date
          </button>
          <button
            type="button"
            className={classnames({'mr_isActiveType': this.state.type === 'raiting'})}
            onClick={() => this.setSortByType('raiting')}
            data-search-type="raiting"
          >
            raiting
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sortSearchResults: params => dispatch(sortSearchResults(params))
})

export default connect(null, mapDispatchToProps)(SearchOrganize)
