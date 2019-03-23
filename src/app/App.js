import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageWrapper from "сomponents/pages/PageWrapper";
import Footer from "сomponents/Footer/Footer";

import './App.css'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <PageWrapper />
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}
