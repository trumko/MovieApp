import React from "react";
import { Link } from 'react-router-dom';

import './MoviePreview.css';
import inBrugesPoster from 'assets/in_bruges_poster.jpg';

export default function MoviePreview({ title, date, genres, posterUrl, id }) {
  const movieYear = new Date(date).getFullYear()
  const movieGenres = genres.join(', ');
  return (
    <Link to={`/movie/${id}`} className="mr_moviePreview">
      <img src={posterUrl} className="mr_moviePoster" />
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
