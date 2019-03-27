import React from 'react';
import MoviePreview from 'components/MoviePreview/MoviePreview'

import './MoviePreviews.scss';
import movieList from './mocks/movieList'

export default function MoviePreviews() {
  return (
    <div className="mr_moviePreviews">
      {movieList.data.map(({ title, release_date, genres, poster_path, id }) => {
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
