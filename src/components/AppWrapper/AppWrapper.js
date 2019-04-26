import React from "react";

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "store/index";

import { PersistGate } from 'redux-persist/lib/integration/react';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import Page from 'components/Pages/Page';
import Footer from 'components/Footer/Footer';

import './AppWrapper.scss'

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <Router>
            <Page />
            <Footer />
          </Router>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
