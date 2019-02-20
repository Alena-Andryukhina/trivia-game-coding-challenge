import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux';
import HomeScreen from './views/HomeScreen';
import QuizScreen from './views/QuizScreen';
import ResultsScreen from './views/ResultsScren';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
`;

const Content = styled.div`
  width: 500px;
  height: 800px;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  background-color: #d0d0d0;
`;

const App = () => (
  <Container>
    <Content>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/quiz/:id" component={QuizScreen} />
          <Route exact path="/results" component={ResultsScreen} />
        </Switch>
      </ConnectedRouter>
    </Content>
  </Container>
);

export default App;
