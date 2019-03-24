import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import PageWrapper from 'components/Pages/PageWrapper';
import Footer from 'components/Footer/Footer';

import './App.scss'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <PageWrapper />
        <Footer />
      </Router>
    </React.Fragment>
  );
}
