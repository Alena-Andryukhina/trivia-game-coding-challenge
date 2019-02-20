import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import answerActions from '../redux/actions/answer-action';
import decodeHTMLEntities from '../helpers/decodeHtml';
import questionsActions from '../redux/actions/questions-action';
import Container from '../components/Container';
import Loader from '../components/Loader';

const Question = styled.div`
  border: 1px solid #000;
  padding: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  line-height: 50px;
  background-color: #e2e0e0;
  border: none;
  cursor: pointer;
`;
const TrueButton = styled.span`
  color: #078c1a;
  :hover {
    color: #76b57f;
  }
`;
const FalseButton = styled.span`
  color: #cc2626;
  :hover {
    color: #de5252;
  }
`;

class QuizScreen extends PureComponent {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    questionsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    addAnswer: PropTypes.func.isRequired,
    fetchQuestionsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchQuestionsRequest } = this.props;
    fetchQuestionsRequest();
  }

  handleClick = answerValue => {
    const {
      questionsList: { length },
      addAnswer,
      history,
      match: {
        params: { id },
      },
    } = this.props;
    const { question, correct_answer: correctAnswer } = this.returnCurrentQuestion();
    const answer = {
      answerValue,
      correctAnswer,
      question,
    };
    addAnswer(answer);
    if (Number(id) === length) {
      history.push('/results');
    } else {
      history.push(`/quiz/${Number(id) + 1}`);
    }
  };

  returnCurrentQuestion = () => {
    const {
      questionsList,
      match: {
        params: { id },
      },
    } = this.props;
    return questionsList[id - 1];
  };

  render() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const currentQuestion = this.returnCurrentQuestion();

    return !currentQuestion ? (
      <Loader />
    ) : (
      <Container>
        <h1>{currentQuestion.category}</h1>
        <Question>
          <h2>{decodeHTMLEntities(currentQuestion.question)}</h2>
        </Question>
        <ButtonContainer>
          <Button onClick={() => this.handleClick('True')}>
            <TrueButton>True</TrueButton>
          </Button>
          <Button onClick={() => this.handleClick('False')}>
            <FalseButton>False</FalseButton>
          </Button>
        </ButtonContainer>
        <p>{`${id} of 10`}</p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  questionsList: state.questions.questionsList,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchQuestionsRequest: questionsActions.fetchQuestionsRequest,
      addAnswer: answerActions.addAnswer,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen);
