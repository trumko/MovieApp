import { SEARCH_RESULTS_GET_SUCCESS, SEARCH_RESULTS_GET_FAIL, SEARCH_RESULTS_SORT } from "../actions/types"

const initialState = {
  searchResults: null,
  sortBy: 'release date'
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_RESULTS_GET_SUCCESS:
      return {...state, searchResults: action.payload.data}

    case SEARCH_RESULTS_GET_FAIL:
      return {...state, searchResults: null}

    case SEARCH_RESULTS_SORT:

      console.log('action', action);
      return {...state, sortBy: action.payload}

    default:
      break;
  }

  return state;
}
