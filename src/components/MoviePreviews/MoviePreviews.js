import React from 'react';

import MoviePreview from 'components/MoviePreview/MoviePreview'

import './MoviePreviews.scss';

export function MoviePreviews({ movies }) {
  if (!movies) {
    return null;
  }

  return (
    <div className="mr_moviePreviews">
      {movies.map(({ title, release_date, genres, poster_path, id }) => {
        return (
          <MoviePreview
            title={title}
            date={release_date}
            genres={genres}
            posterUrl={poster_path}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
}

export default MoviePreviews
