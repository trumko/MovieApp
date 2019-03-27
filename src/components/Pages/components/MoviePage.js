import React from "react";
import MoviePreviews from 'components/MoviePreviews/MoviePreviews';
import Header from 'components/Header/Header';
import Movie from 'components/Movie/Movie';

export default function MoviePage({ match }) {
  const { movieId } = match.params;

  return (
    <>
      <Header>
        <Movie />
      </Header>
      <div className="mr_content mr_container">
        <p>Movie page: {movieId}</p>
        <MoviePreviews />
      </div>
    </>
  );
}
