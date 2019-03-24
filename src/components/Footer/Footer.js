import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';

import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="mr_footer">
        <div className="mr_container">
          <Logo />
          <span className="mr_testContent">
            <Link to="/">Home page</Link>
            <span> | </span>
            <Link to="/test">Test page</Link>
            <span> | </span>
            <Link to="/movie/1">Movie page</Link>
          </span>
        </div>
      </div>
    )
  }
}