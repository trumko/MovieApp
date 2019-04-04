import React from "react";
import { getMovieYear } from 'utils/helpers';

import './Movie.scss';

export function Movie({ movie } ) {
  if (!movie) {
    return null;
  }

  const { title, release_date, poster_path, tagline, runtime, overview, vote_average } = movie;
  const movieYear = getMovieYear(release_date);
  return (
    <div className="mr_movie">
      <div className="mr_poster">
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

export default Movie
