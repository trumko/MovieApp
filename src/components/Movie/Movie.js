import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import './Movie.scss';
import { movie } from './mocks/movie'

export class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  fetchMovie = () => {
    const movieId = this.props.match.params.movie_id;
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({data: data});
        window.scrollTo(0, 0);
      });
  }

  componentDidMount() {
    this.fetchMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    document.body.scrollTop = 0;
    const previosMovieId = prevProps.match.params.movie_id;
    const movieId = this.props.match.params.movie_id;

    if (previosMovieId !== movieId) {
      this.fetchMovie();
    }
  }

  render() {
    if (!this.state.data) {
      return null;
    }
    const { title, release_date, genres, poster_path, tagline, runtime, overview, vote_average, id } = this.state.data;
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
}

export default withRouter(Movie)