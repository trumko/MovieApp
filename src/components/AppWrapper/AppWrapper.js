import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "store/index";

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import Page from 'components/Pages/Page';
import Footer from 'components/Footer/Footer';

import './AppWrapper.scss'

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Page />
          <Footer />
        </Router>
        <p>This is test line</p>
      </ErrorBoundary>
    </Provider>
  );
}
