import { INCREASE_COUNT } from "../actions/types";

const initialState = {
  count: 1
};

export default function movieReducer(state = initialState, action) {
  console.log('action', action);
  switch(action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 }

    case 'value2':
      break;

    default:
      break;
  }

  return state;
}
