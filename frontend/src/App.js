import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import RootScreen from './screens/RootScreen';
// import { Route } from 'react-router-dom';
import * as ReadableAPI from './server/server-api';
import './App.css';

class App extends Component {

  state = {
    categories: [],
    posts: []
  };

  componentDidMount() {
    // TODO - Make a call to go load all of the categories, posts, and comments into the Redux store.
    ReadableAPI.getAllCategories().then((categories) => {
      this.setState({ categories });
      console.log(this.state);
    });
    ReadableAPI.getAllPosts().then((posts) => {
      this.setState({ posts });
      console.log(this.state);
    });
  }

  // TODO - Add other screens to routes
  render() {

    const { categories, posts } = this.state;

    return (
      <Provider store={store}>
        <div>
          <div>
            <div>
              <h2>Categories</h2>
            </div>
            <div>
              <ul style={{'listStyleType':'none'}}>
                {categories.map((category) => (
                  <li key={ category.path }>{ category.name }</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
