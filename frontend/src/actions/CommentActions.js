
import {
  FETCH_COMMENTS_FOR_POST,
  ADD_COMMENT_TO_POST,
  FETCH_COMMENT_DETAILS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "../actions/ActionTypes";

export const fetchCommentsForPost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: FETCH_COMMENTS_FOR_POST,
    payload: data
  })
};

export const addCommentToPost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: ADD_COMMENT_TO_POST,
    payload: data
  })
};

export const fetchCommentDetails = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: FETCH_COMMENT_DETAILS,
    payload: data
  })
};

export const upvoteComment = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: UPVOTE_COMMENT,
    payload: data
  })
};

export const downvoteComment = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: DOWNVOTE_COMMENT,
    payload: data
  })
};

export const editComment = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: EDIT_COMMENT,
    payload: data
  })
};

export const deleteComment = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: DELETE_COMMENT,
    payload: data
  })
};