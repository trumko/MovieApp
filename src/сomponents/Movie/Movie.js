import React from "react";

import './Movie.scss';
import { movie } from './mocks/movie'

export default function Movie() {
  console.log('movie', movie);
  const { title, release_date, genres, poster_path, tagline, runtime, overview, vote_average, id } = movie;
  const movieYear = new Date(release_date).getFullYear()
  const movieGenres = genres.join(', ');
  return (
    <div className="mr_movie">
      <div  className="mr_poster">
        <img src={poster_path} alt={title} />
      </div>
      <div className="mr_movieDetails">
        <h1>{title}</h1>
        <span className="mr_voteAvarage">{vote_average}</span>
        <p className="mr_tagLine">{tagline}</p>
        <div>
          <p className="mr_movieYear">{movieYear}</p>
          <p className="mr_runtime">{runtime} min</p>
        </div>
        <p className="mr_overview">{overview}</p>
      </div>
    </div>
  );
}
