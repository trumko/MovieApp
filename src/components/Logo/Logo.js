import React from "react";
import { Link } from 'react-router-dom';

import './Logo.scss'

export default function Logo() {
  return (
    <div className="mr_logoConteiner">
      <Link to="/" className="mr_logo">netflixroulette</Link>
    </div>
  )
}
