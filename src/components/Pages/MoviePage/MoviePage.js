import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";

import MoviePreviews from 'components/MoviePreviews/MoviePreviews';
import Header from 'components/Header/Header';
import Movie from 'components/Movie/Movie';
import { getMovie, getRelatedMovies, clearMovie, clearRelatedMovies } from './actions'

export class MoviePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId);
  }

  componentDidUpdate() {
    const { movie, relatedMovies } = this.props;
    if (movie && !relatedMovies) {
      const genres = movie.genres.join(',')
      this.props.getRelatedMovies(genres);
    }
  }

  componentWillUnmount() {
      const { clearMovie, clearRelatedMovies } = this.props;
      clearMovie();
      clearRelatedMovies();
  }

  render() {
    const { movie, relatedMovies } = this.props;

    return (
      <>
        <Header>
          { movie && <Movie movie={movie} /> }
        </Header>
        <div className="mr_content mr_container">
          { relatedMovies && <MoviePreviews movieList={relatedMovies} /> }
        </div>
      </>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  getMovie: movieId => dispatch(getMovie(movieId)),
  getRelatedMovies: genres => dispatch(getRelatedMovies(genres)),
  clearMovie: () => dispatch(clearMovie()),
  clearRelatedMovies: () => dispatch(clearRelatedMovies()),
})

const mapStateToProps = (state) => ({
 movie: state.movieReducer.movie,
 relatedMovies: state.movieReducer.relatedMovies,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage))




//
//
//
//
// import React, { Component } from "react";
// import { withRouter } from 'react-router-dom'
// import { connect } from "react-redux";
//
// import { getMovieYear } from 'utils/helpers';
// import { getMovie } from './actions'
//
// import './Movie.scss';
//
// export class Movie extends Component {
//   componentDidMount() {
//     const { movieId } = this.props.match.params;
//     this.props.getMovie(movieId)
//   }
//
//   componentDidUpdate(prevProps) {
//     const previosMovieId = prevProps.match.params.movieId;
//     const currentMovieId = this.props.match.params.movieId;
//
//     if (previosMovieId !== currentMovieId) {
//       window.scrollTo(0, 0);
//       this.props.getMovie(currentMovieId);
//     }
//   }
//
//   render() {
//     const { movie } = this.props;
//
//     if (!movie) {
//       return null;
//     }
//
//     const { title, release_date, poster_path, tagline, runtime, overview, vote_average } = movie;
//     const movieYear = getMovieYear(release_date);
//     return (
//       <div className="mr_movie">
//         <div className="mr_poster">
//           <img src={poster_path} alt={title} />
//         </div>
//         <div className="mr_movieDetails">
//           <h1>{title}</h1>
//           <span className="mr_voteAvarage">{vote_average}</span>
//           <p className="mr_tagLine">{tagline}</p>
//           <div>
//             <p className="mr_movieYear">{movieYear}</p>
//             <p className="mr_runtime">{runtime} min</p>
//           </div>
//           <p className="mr_overview">{overview}</p>
//         </div>
//       </div>
//     );
//   }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   getMovie: movieId => dispatch(getMovie(movieId))
// })
//
// const mapStateToProps = (state) => ({
//  movie: state.movieReducer.movie
// })
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie))
