import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class ResultsScreen extends Component {
  render() {
    return (
      <Fragment>
        <h1>You scored 3/10</h1>
        <Link to="/">PLAY AGAIN</Link>
      </Fragment>
    );
  }
}

export default ResultsScreen;
