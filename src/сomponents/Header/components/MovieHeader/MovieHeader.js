import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Movie from 'сomponents/Movie/Movie';

import './MovieHeader.css';

export default class MovieHeader extends Component {
  render() {
    return (
      <>
        <h2>Movie page</h2>
        <Movie />
      </>
    )
  }
}
