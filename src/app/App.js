import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "store/index";

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import PageWrapper from 'components/Pages/PageWrapper';
import Footer from 'components/Footer/Footer';

import './App.scss'

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <PageWrapper />
          <Footer />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}
