import React from 'react';
import MoviePreview from 'components/MoviePreview/MoviePreview'

import './MoviePreviews.scss';
import movieList from './mocks/movieList'

export default function MoviePreviews() {
  return (
    <div className="mr_moviePreviews">
      {movieList.data.map((movie) => {
        const { title, release_date, genres, poster_path, id } = movie;
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
