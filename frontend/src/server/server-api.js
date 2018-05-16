
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