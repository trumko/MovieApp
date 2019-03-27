import React from "react";

// import Movie from 'components/Movie/Movie';
import Logo from 'components/Logo/Logo';
// import HomeHeader from './components/HomeHeader/HomeHeader';

import './Header.scss'

export default function Header({ children }) {
  return (
    <div className="mr_header">
      <div className="mr_container mr_headerContent">
        <Logo />
        {children}
      </div>
    </div>
  )
}
