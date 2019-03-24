import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Movie from 'сomponents/Movie/Movie';

import './MovieHeader.scss';

export default class MovieHeader extends Component {
  render() {
    return (
      <>
        <Movie />
      </>
    )
  }
}
