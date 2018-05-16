import React, { Component } from 'react';
import RootScreen from './screens/RootScreen';
import { Route } from 'react-router-dom';
import * as ReadableAPI from './server/server-api';
import './App.css';

class App extends Component {

  componentDidMount() {
    // TODO - Make a call to go load all of the categories, posts, and comments into the Redux store.
    ReadableAPI.getAllCategories().then((categories) => {
      console.log(categories);
    });
    ReadableAPI.getAllPosts().then((posts) => {
      console.log(posts);
    });
  }

  // TODO - Add other screens to routes
  render() {
    return (
      <div className="App">
        <Route exact path="/" redner={() => (
          <RootScreen/>
        )}/>
      </div>
    );
  }
}

export default App;
