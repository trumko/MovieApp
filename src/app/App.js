import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import PageWrapper from 'components/Pages/PageWrapper';
import Footer from 'components/Footer/Footer';

import './App.scss'

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PageWrapper />
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}
