import React, { Component } from 'react';
import MoviePreviews from 'сomponents/MoviePreviews/MoviePreviews';
import Header from 'сomponents/Header/Header'

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header isHome />
        <div className="mr_content mr_container">
          <p>Home page</p>
          <MoviePreviews />
        </div>
      </>
    );
  }
}
