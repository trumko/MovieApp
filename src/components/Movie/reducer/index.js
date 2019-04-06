import { SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL } from "../actions/types";

const initialState = {
  movie: null,
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case SPECIFIC_MOVIE_GET_SUCCESS:
      return {...state, movie: action.payload}

    case SPECIFIC_MOVIE_GET_FAIL:
      return {...state, movie: null}

    default:
      break;
  }

  return state;
}
