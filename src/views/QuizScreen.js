import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class QuizScreen extends Component {
  render() {
    return (
      <Fragment>
        <h1>Entertainment: Video Games</h1>
        <div>text</div>
        <div>1 of 10</div>
        <Link to="/results">Ok</Link>
      </Fragment>
    );
  }
}

export default QuizScreen;
