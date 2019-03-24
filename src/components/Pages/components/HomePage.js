import React from 'react';
import MoviePreviews from 'components/MoviePreviews/MoviePreviews';
import Header from 'components/Header/Header'

export default function HomePage() {
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
