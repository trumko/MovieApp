import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PageWrapper from "components/pages/PageWrapper";
import Footer from "components/Footer/Footer";

import './App.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper />
        <Footer />
      </Router>
    );
  }
}
