import React from 'react';
import MoviePreview from 'сomponents/MoviePreview/MoviePreview'

import './MoviePreviews.css';
import { movieList } from './mocks/movieList'

export default function MoviePreviews() {
  return (
    <div className="mr_moviePreviews">
      {movieList.map((movie, i) => {
        const { title, date, genre, posterUrl, id } = movie;
        return (
          <MoviePreview
            title={title}
            date={date}
            genre={genre}
            posterUrl={posterUrl}
            key={id}
            id={id}
          />
        );
      })}
    </div>
  );
}
