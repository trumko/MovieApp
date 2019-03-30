import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "store/index";

import Wrapper from 'components/Wrapper/Wrapper'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import Page from 'components/Pages/Page';
import Footer from 'components/Footer/Footer';

export default function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <ErrorBoundary>
          <Router>
            <Page />
            <Footer />
          </Router>
        </ErrorBoundary>
      </Wrapper>
    </Provider>
  );
}
