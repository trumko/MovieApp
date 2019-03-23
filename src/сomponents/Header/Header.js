import React, { Component } from "react";
import { Link } from 'react-router-dom';

import HomeHeader from './components/HomeHeader/HomeHeader';
import MovieHeader from './components/MovieHeader/MovieHeader';

import './Header.css'

export default class Header extends Component {
  render() {
    const { isHome } = this.props;
    return (
      <div className="mr_header">
        <div className="mr_container mr_headerContent">
          {isHome ? <HomeHeader /> : <MovieHeader />}
        </div>
      </div>
    )
  }
}
