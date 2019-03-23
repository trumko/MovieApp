import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from "сomponents/Footer/Footer";
import Header from "сomponents/Header/Header";
import PageWrapper from "сomponents/pages/PageWrapper";

import './App.css'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <PageWrapper />
          <Footer />
        </Router>
    );
  }
}
