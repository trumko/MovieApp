import React from "react";
import MoviePreviews from 'components/MoviePreviews/MoviePreviews';
import Header from 'components/Header/Header';

export default function MoviePage({ match }) {
  const movieId = match.params.movie_id;

  return (
    <>
      <Header />
      <div className="mr_content mr_container">
        <p>Movie page: {movieId}</p>
        <MoviePreviews />
      </div>
    </>
  );
}
