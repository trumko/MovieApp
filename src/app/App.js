import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import Footer from "../сomponents/Footer/Footer";
import Header from "../сomponents/Header/Header";

import './App.css'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Header />
            <div className="mr_content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/test" component={TestPage} />
              </Switch>
            </div>
          <Footer />
        </Router>
    );
  }
}
