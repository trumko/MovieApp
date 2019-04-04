import {
  SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL, SPECIFIC_MOVIE_CLEAR,
  RELATED_MOVIES_GET_SUCCESS, RELATED_MOVIES_GET_FAIL, RELATED_MOVIES_CLEAR,
} from "../actions/types";

const initialState = {
  movie: null,
  relatedMovies: null,
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case SPECIFIC_MOVIE_GET_SUCCESS:
      return {...state, movie: action.payload}

    case SPECIFIC_MOVIE_GET_FAIL:
    case SPECIFIC_MOVIE_CLEAR:
      return {...state, movie: null}

    case RELATED_MOVIES_GET_SUCCESS:
      return {...state, relatedMovies: action.payload}

    case RELATED_MOVIES_GET_FAIL:
    case RELATED_MOVIES_CLEAR:
      return {...state, relatedMovies: null}

    default:
      break;
  }

  return state;
}
