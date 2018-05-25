
import {
  FETCH_COMMENTS_FOR_POST,
  ADD_COMMENT_TO_POST,
  FETCH_COMMENT_DETAILS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "../actions/ActionTypes";

const initialState = {};

// TODO - Update to actually do stuff.
function commentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_FOR_POST:
      // TODO
      return state;
    case ADD_COMMENT_TO_POST:
      // TODO
      return state;
    case FETCH_COMMENT_DETAILS:
      // TODO
      return state;
    case UPVOTE_COMMENT:
      // TODO
      return state;
    case DOWNVOTE_COMMENT:
      // TODO
      return state;
    case EDIT_COMMENT:
      // TODO
      return state;
    case DELETE_COMMENT:
      // TODO
      return state;
    default:
      return state;
  }
}

export default commentReducer;
