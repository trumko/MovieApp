import { SEARCH_RESULTS_GET_SUCCESS, SEARCH_RESULTS_GET_FAIL } from "../actions/types"

const initialState = {
  searchResults: null,
};

export default function movieReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_RESULTS_GET_SUCCESS:
      return {...state, searchResults: action.payload.data}

    case SEARCH_RESULTS_GET_FAIL:
      return {...state, searchResults: null}

    default:
      break;
  }

  return state;
}
