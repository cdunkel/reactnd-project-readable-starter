import { combineReducers } from 'redux';

import postReducer from './PostReducer';
import commentReducer from './CommentReducer';
import categoryReducer from './CategoryReducer';

export default combineReducers({
  posts: postReducer,
  comments: commentReducer,
  categories: categoryReducer
})