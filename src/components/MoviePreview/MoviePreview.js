import React from "react";
import { Link } from 'react-router-dom';

import { getMovieYear } from 'utils/helpers';

import './MoviePreview.scss';

export default function MoviePreview({ title, date, genres, posterUrl, id }) {
  const movieYear = getMovieYear(date);
  const movieGenres = genres.join(', ');
  return (
    <Link to={`/movie/${id}`} className="mr_moviePreview">
      <img src={posterUrl} className="mr_moviePoster" alt={title} />
      <div className="mr_movieInfo">
        <div>
          <div className="mr_movieTitle">{title}</div>
          <div className="mr_movieDate">
            <span>{movieYear}</span>
          </div>
        </div>
        <div className="mr_movieGenre">{movieGenres}</div>
      </div>
    </Link>
  );
}
