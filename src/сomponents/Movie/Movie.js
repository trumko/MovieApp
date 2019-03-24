import React from "react";

import './Movie.scss';
import { movie } from './mocks/movie'
// import inBrugesPoster from 'assets/in_bruges_poster.jpg';

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
        <h2>{title}</h2>
        <p>{vote_average}</p>
        <p>{tagline}</p>
        <p>{movieYear}</p>
        <p>{runtime} min</p>
        <p>{overview} min</p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
}
