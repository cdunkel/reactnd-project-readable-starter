
const api = "http://localhost:3001";

const headers = {
  'Authorization': 'auth_token_string'
};


/**
 * CATEGORIES
 */

/**
 * Get the array of all categories.
 * @return {Promise<any>}
 */
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);


/**
 * POSTS
 */

/**
 * Get the array of all posts.
 * @return {Promise<any>}
 */
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

/**
 * Get the array of all posts with the given category.
 *
 * @param category  A string representing a category.
 * @return {Promise<any>}
 */
export const getAllPostsForCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

/**
 * Add a new post to the server.
 *
 * @param post  The post object to add.
 * @return {Promise<any>}
 */
export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ post })
  }).then(res => res.json());


// export const getPostDetails = () =>
//   fetch(`${api}/categories`, { headers })
//     .then(res => res.json())
//     .then(data => data.categories);

/**
 * COMMENTS
 */

// GET /posts/:id/comments
// USAGE:
//   Get all the comments for a single post
//
// POST /comments
// USAGE:
//   Add a comment to a post
//
// PARAMS:
//   id: Any unique ID. As with posts, UUID is probably the best here.
//   timestamp: timestamp. Get this however you want.
//   body: String
// author: String
// parentId: Should match a post id in the database.
//
//   GET /comments/:id
// USAGE:
//   Get the details for a single comment
//
// POST /comments/:id
// USAGE:
//   Used for voting on a comment.
//   PARAMS:
// option - String: Either "upVote" or "downVote"
//
// PUT /comments/:id
// USAGE:
//   Edit the details of an existing comment
//
// PARAMS:
//   timestamp: timestamp. Get this however you want.
//   body: String
//
// DELETE /comments/:id
// USAGE:
//   Sets a comment's deleted flag to 'true'

/**
 * Get the array of all comments for a given post.
 *
 * @param post
 * @return {Promise<Response>}
 */
export const getCommentsForPost = (post) =>
  fetch(`${api}/posts/${post.id}/comments`, { headers })
    .then(res => res.json());