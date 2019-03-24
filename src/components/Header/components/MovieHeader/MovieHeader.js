import React, { Component } from "react";
import Movie from 'components/Movie/Movie';

import './MovieHeader.scss';

export default class MovieHeader extends Component {
  render() {
    const a = Math.random();
    return (
      <>
        <Movie key={a}/>
      </>
    )
  }
}
