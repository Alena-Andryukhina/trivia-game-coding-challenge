import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import { history } from './redux';
import questionsActions from './redux/actions/questions-action';
import './App.css';
import HomeScreen from './views/HomeScreen';
import QuizScreen from './views/QuizScreen';
import ResultsScreen from './views/ResultsScren';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 500px;
  height: 800px;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background-color: #d0d0d0;
`;

class App extends Component {
  componentDidMount() {
    const { fetchQuestionsRequest } = this.props;
    fetchQuestionsRequest();
  }

  render() {
    const {
      questions: { results },
    } = this.props;
    console.log(results);
    return (
      <Container>
        <Content>
          <ConnectedRouter history={history}>
            <>
              <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/quiz" component={QuizScreen} />
                <Route exact path="/results" component={ResultsScreen} />
              </Switch>
            </>
          </ConnectedRouter>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.list,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuestionsRequest: questionsActions.fetchQuestionsRequest,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
