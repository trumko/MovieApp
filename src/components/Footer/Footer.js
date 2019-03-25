import React from "react";
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';

import './Footer.scss'

export default function Footer() {
    return (
      <div className="mr_footer">
        <div className="mr_container">
          <Logo />
          <span className="mr_testContent">
            <Link to="/">Home page</Link>
            <span> | </span>
            <Link to="/test">Test page</Link>
          </span>
        </div>
      </div>
    )
}
