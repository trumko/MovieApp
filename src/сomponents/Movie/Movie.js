import React from "react";

import './Movie.css';
import { movie } from './mocks/movie'
// import inBrugesPoster from 'assets/in_bruges_poster.jpg';

export default function Movie() {
  console.log('movie', movie);
  const { title, release_date, genres, poster_path, id } = movie;
  const movieYear = new Date(release_date).getFullYear()
  const movieGenres = genres.join(', ');
  return (
      <h2>{title}</h2>
  );
}


// <Link to={`/movie/${id}`} className="mr_moviePreview">
//   <img src={posterUrl} className="mr_moviePoster" />
//   <div className="mr_movieInfo">
//     <div>
//       <div className="mr_movieTitle">{title}</div>
//       <div className="mr_movieDate">
//         <span>{movieYear}</span>
//       </div>
//     </div>
//     <div className="mr_movieGenre">{movieGenres}</div>
//   </div>
// </Link>
