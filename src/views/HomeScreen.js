import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class HomeScreen extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome to the Trivia Challenge!</h1>
        <div>You will be presented with 10 True or False questions.</div>
        <div>Can you score 100?</div>
        <Link to="/quiz">BEGIN</Link>
      </Fragment>
    );
  }
}

export default HomeScreen;
