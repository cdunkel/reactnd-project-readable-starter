import {
  FETCH_CATEGORIES
} from "./ActionTypes";

export const fetchCategories = (dispatch) => {
  // TODO - Get data from somewhere and add it to the payload, below
  dispatch({
    type: FETCH_CATEGORIES,
    payload: {}
  })
};