
import {
  FETCH_CATEGORIES
} from "../actions/ActionTypes";

const initialState = {};

// TODO - Update to actually do stuff.
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
}

export default categoryReducer;