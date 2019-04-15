// import React from "react";
// import { Link } from 'react-router-dom';
//
// import { getMovieYear } from 'utils/helpers';
//
// import './MoviePreview.scss';
//
// export default function MoviePreview({ title, date, genres, posterUrl, id }) {
//   const movieYear = getMovieYear(date);
//   const movieGenres = genres.join(', ');
//   return (
//     <Link to={`/movie/${id}`} className="mr_moviePreview">
//       <img src={posterUrl} className="mr_moviePoster" alt={title} />
//       <div className="mr_movieInfo">
//         <div>
//           <div className="mr_movieTitle">{title}</div>
//           <div className="mr_movieDate">
//             <span>{movieYear}</span>
//           </div>
//         </div>
//         <div className="mr_movieGenre">{movieGenres}</div>
//       </div>
//     </Link>
//   );
// }
//

import React from 'react'
import { shallow } from 'enzyme'
import MoviePreview from './MoviePreview'

describe('MoviePreview', () => {
  it('MoviePreview with custom Movie should be rendered correctly', () => {
    const component = shallow(
      <MoviePreview
        title="Isle of Dogs"
        date="2018-03-23"
        genres={["Adventure", "Comedy", "Animation"]}
        posterUrl="https://image.tmdb.org/t/p/w500/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg"
        id="399174"

      />
    );

    expect(component).toMatchSnapshot();
  });
});
