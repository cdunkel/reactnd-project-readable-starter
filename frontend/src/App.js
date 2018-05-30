import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
// import RootScreen from './screens/RootScreen';
// import { Route } from 'react-router-dom';
import './App.css';

// Actions
import fetchCategories from './actions/CategoryActions';
import fetchPosts from './actions/PostActions';
import fetchCommentsForPost from './actions/CommentActions';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();

    // for (post in this.props.posts) {
    //   this.props.fetchCommentsForPost(post);
    // }
  }

  // TODO - Add other screens to routes
  render() {

    const { categories, posts, comments } = this.props;

    return (
      <div>
        <div>
          <div>
            <h3>Categories:</h3>
          </div>
          <div>
            <ul style={{'listStyleType':'none'}}>
              {categories.map((category) => (
                <li key={ category.name }>{ category.name }</li>
              ))}
            </ul>
          </div>
          <h3>Posts:</h3>
          <div>
            <ul style={{'listStyleType':'none'}}>
              {posts.map((post) => (
                <li key={ post.id }>{ post.title }</li>
              ))}
            </ul>
          </div>
          <h3>Comments:</h3>
          <div>
            <ul style={{'listStyleType':'none'}}>
              {posts.map((post) => (
                <li key={ post.id }>{ post.title }</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    posts: state.posts,
    comments: state.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => { dispatch(fetchCategories()) },
    fetchPosts: () => { dispatch(fetchPosts()) },
    fetchCommentsForPost: (post) => { dispatch(fetchCommentsForPost(post)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
