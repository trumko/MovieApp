import {
  SPECIFIC_MOVIE_GET, SPECIFIC_MOVIE_GET_SUCCESS, SPECIFIC_MOVIE_GET_FAIL,
  SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL, SIMILAR_RESULTS_CLEAR
} from "../actions/types";

const initialState = {
  movie: null,
  similarResults: null,
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case SPECIFIC_MOVIE_GET_SUCCESS:
      return {...state, movie: action.payload}

    case SPECIFIC_MOVIE_GET:
    case SPECIFIC_MOVIE_GET_FAIL:
      return {...state, movie: null}

    case SIMILAR_RESULTS_GET_SUCCESS:
      return {...state, similarResults: action.payload.data}

    case SIMILAR_RESULTS_GET:
    case SIMILAR_RESULTS_GET_FAIL:
    case SIMILAR_RESULTS_CLEAR:
      return {...state, similarResults: null}

    default:
      break;
  }

  return state;
}



// import { SIMILAR_RESULTS_GET, SIMILAR_RESULTS_GET_SUCCESS, SIMILAR_RESULTS_GET_FAIL, SIMILAR_RESULTS_CLEAR } from "../actions/types";

// const initialState = {
//   similarResults: null,
// };
//
// export default function movieReducer(state = initialState, action) {
//   switch(action.type) {
//     case SIMILAR_RESULTS_GET_SUCCESS:
//       return {...state, similarResults: action.payload.data}
//
//     case SIMILAR_RESULTS_GET:
//     case SIMILAR_RESULTS_GET_FAIL:
//     case SIMILAR_RESULTS_CLEAR:
//       return {...state, similarResults: null}
//
//     default:
//       break;
//   }
//
//   return state;
// }
