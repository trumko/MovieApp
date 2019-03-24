import React from "react";
import { Link } from 'react-router-dom';

import './Logo.css'

export default function Logo() {
  return (
    <Link to="/">
      <span className="mr_logo">netflixroulette</span>
    </Link>

  )
}
