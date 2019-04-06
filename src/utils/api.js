import { shuffle } from './helpers';

export const fetchMovie = (movieId) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    .then(response => response.json())
}

export const fetchSearchResults = (params) => {
  const { search, genre } = params;
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=${genre}&limit=12`)
    .then(response => response.json())
}

export const fetchSimilarResults = (movie) => {
  const randomGenre = shuffle(movie.genres)[0];
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=${randomGenre}&limit=12`)
     .then(response => response.json())
}
