import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
// import RootScreen from './screens/RootScreen';
// import { Route } from 'react-router-dom';
import './App.css';

// Actions
import fetchCategories from './actions/CategoryActions';

class App extends Component {

  state = {
    categories: [],
    posts: []
  };

  componentDidMount() {
    this.props.fetchCategories();

    // ReadableAPI.getAllCategories().then((categories) => {
    //   this.setState({ categories });
    //   console.log(this.state);
    // });
    // ReadableAPI.getAllPosts().then((posts) => {
    //   this.setState({ posts });
    //   console.log(this.state);
    // });
  }

  // TODO - Add other screens to routes
  render() {

    const { categories } = this.props;

    return (
      <div>
        <div>
          <div>
            <h2>Categories</h2>
          </div>
          <div>
            <ul style={{'listStyleType':'none'}}>
              { categories }
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
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => { dispatch(fetchCategories()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
