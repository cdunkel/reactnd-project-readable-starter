
import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  ADD_POST,
  FETCH_POST_DETAILS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST
} from "../actions/ActionTypes";

const initialState = [];

// TODO - Update to actually do stuff.
function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POSTS_BY_CATEGORY:
      // TODO
      return state;
    case ADD_POST:
      // TODO
      return state;
    case FETCH_POST_DETAILS:
      // TODO
      return state;
    case UPVOTE_POST:
      // TODO
      return state;
    case DOWNVOTE_POST:
      // TODO
      return state;
    case EDIT_POST:
      // TODO
      return state;
    case DELETE_POST:
      // TODO
      return state;
    default:
      return state;
  }
}

export default postReducer;