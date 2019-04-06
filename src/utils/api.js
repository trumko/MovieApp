import { shuffle } from './helpers';

export const fetchMovie = (movieId) => {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    .then(response => response.json())
}

export const fetchSearchResults = (params) => {
  const { search, genre } = params;
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=${genre}`)
    .then(response => response.json())
}

export const fetchSimilarResults = (genres) => {
  const randomTwoGenres = shuffle(genres)[0];
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?searchBy=genres&filter=${randomTwoGenres}`)
     .then(response => response.json())
}
