
import * as ReadableAPI from '../server/server-api';

import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  ADD_POST,
  FETCH_POST_DETAILS,
  UPVOTE_POST,
  DOWNVOTE_POST,
  EDIT_POST,
  DELETE_POST
} from "./ActionTypes";

function fetchPosts() {
  return function(dispatch) {
    return ReadableAPI.getAllPosts().then((posts) => {
      console.log('fetch posts');
      console.log(posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    })
  };
}

export const fetchPostsByCategory = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: FETCH_POSTS_BY_CATEGORY,
    payload: data
  })
};

export const addPost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: ADD_POST,
    payload: data
  })
};

export const fetchPostDetails = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: FETCH_POST_DETAILS,
    payload: data
  })
};

export const upvotePost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: UPVOTE_POST,
    payload: data
  })
};

export const downvotePost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: DOWNVOTE_POST,
    payload: data
  })
};

export const editPost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: EDIT_POST,
    payload: data
  })
};

export const deletePost = (dispatch) => {
  // TODO - Get the data from somewhere
  const data = {};
  // Dispatch the data
  dispatch({
    type: DELETE_POST,
    payload: data
  })
};

export default fetchPosts;