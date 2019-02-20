import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../components/Container';
import answerActions from '../redux/actions/answer-action';
import decodeHTMLEntities from '../helpers/decodeHtml';

const ScrollBlock = styled.div`
  height: 100%;
  overflow-y: auto;
`;
const AnswerIncorrect = styled.p`
  color: #cc2626;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0;
  text-align: left;
  width: 100%;
`;
const AnswerCorrect = styled.p`
  color: #078c1a;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px 0
  text-align: left;
  width: 100%;
`;
const LinkContainer = styled(Link)`
  font-weight: 600;
  color: #000;
  text-decoration: none;
`;

class ResultScreen extends Component {
  static propTypes = {
    resetAnswers: PropTypes.func.isRequired,
    answerList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  resetAnswers = () => {
    const { resetAnswers } = this.props;
    resetAnswers();
  };

  renderAnswers = (answer, index) => {
    if (answer.answerValue === answer.correctAnswer) {
      return <AnswerCorrect key={index}>{`+ ${decodeHTMLEntities(answer.question)}`}</AnswerCorrect>;
    }
    return <AnswerIncorrect key={index}>{`- ${decodeHTMLEntities(answer.question)}`}</AnswerIncorrect>;
  };

  renderScore = () => {
    const { answerList } = this.props;
    const correctAnswers = answerList.filter(item => item.answerValue === item.correctAnswer);
    return (
      <div>
        <h1>You scored</h1>
        <h1>{`${correctAnswers.length}/${answerList.length}`}</h1>
      </div>
    );
  };

  render() {
    const { answerList } = this.props;
    return (
      <Container>
        {this.renderScore()}
        <ScrollBlock>{answerList.length ? answerList.map(this.renderAnswers) : <p>Loading fail</p>}</ScrollBlock>
        <LinkContainer to="/" onClick={this.resetAnswers}>
          PLAY AGAIN?
        </LinkContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  answerList: state.answers.answerList,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      resetAnswers: answerActions.resetAnswers,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultScreen);
