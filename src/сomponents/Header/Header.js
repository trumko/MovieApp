import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <div className="mr_header">
          <h2>Header</h2>
          <ul>
            <li><Link to="/"> Home page </Link></li>
            <li><Link to="/test"> Test page </Link></li>
          </ul>
        </div>
    )
  }
}
