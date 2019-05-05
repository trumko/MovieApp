import React from 'react';

import MoviePreview from 'components/MoviePreview/MoviePreview'
import { sortByField } from 'utils/helpers'

// import './MoviePreviews.scss';

export function MoviePreviews({ movies, sortbyType }) {
  if (!movies) {
    return null;
  }

  const sortMovies = () => {
    const sortTypes = {
      'raiting': 'vote_average',
      'release date': 'release_date'
    }
    return sortByField(movies, sortTypes[sortbyType]);
  }

  const sortedMovies = sortMovies(movies, sortbyType);

  return (
    <div className="mr_moviePreviews">
      {sortedMovies.map(({ title, release_date, genres, poster_path, id }) => {
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
