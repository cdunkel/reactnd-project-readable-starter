
import * as ReadableAPI from '../server/server-api';

import {
  FETCH_CATEGORIES
} from "./ActionTypes";

function fetchCategories() {
  return function(dispatch) {
    // TODO - extract the array of categories from the returned data.
    return ReadableAPI.getAllCategories().then((categories) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: categories,
      })
    });
  }
}

// function fetchCategories(dispatch) {
//   // TODO - Get data from somewhere and add it to the payload, below
//   ReadableAPI.getAllCategories().then((categories) => {
//     console.log(categories);
//     dispatch({
//       type: FETCH_CATEGORIES,
//       payload: categories
//     })
//   })
// }

export default fetchCategories;