import React, { Component } from "react";
import { Link } from 'react-router-dom';

import HomeHeader from './components/HomeHeader/HomeHeader';
import Movie from 'components/Movie/Movie';
import Logo from 'components/Logo/Logo';

import './Header.scss'

export default class Header extends Component {
  render() {
    const { isHome } = this.props;
    return (
      <div className="mr_header">
        <div className="mr_container mr_headerContent">
          <Logo />
          {isHome ? <HomeHeader /> : <Movie />}
        </div>
      </div>
    )
  }
}
