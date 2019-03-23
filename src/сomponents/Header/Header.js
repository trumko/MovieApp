import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
        <div className="mr_header">
          <div className="mr_container mr_headerContent">
            <h2>Header</h2>
          </div>
        </div>
    )
  }
}
