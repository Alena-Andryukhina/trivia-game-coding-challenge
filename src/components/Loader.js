import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 16px solid #fff;
  border-top: 16px solid #078c1a;
  border-radius: 50%;
  animation: ${Animation} 0.5s linear infinite;
`;

function Loader() {
  return (
    <Container>
      <Spinner />
    </Container>
  );
}

export default Loader;
