import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../components/Container';

const LinkContainer = styled(Link)`
  font-weight: 600;
  color: #000;
  text-decoration: none;
`;

function HomeScreen() {
  return (
    <Container>
      <h1>Welcome to the Trivia Challenge!</h1>
      <div>You will be presented with 10 True or False questions.</div>
      <div>Can you score 100?</div>
      <LinkContainer to="/quiz/1">BEGIN</LinkContainer>
    </Container>
  );
}

export default HomeScreen;
