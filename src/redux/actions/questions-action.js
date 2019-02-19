import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
} from '../../constants';

const ACTIONS = Object.freeze({
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,

  // actionCreators
  fetchQuestionsRequest: () => ({
    type: FETCH_QUESTIONS_REQUEST
  }),
  fetchQuestionsSuccess: questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions
  }),
  fetchQuestionsError: error => ({
    type: FETCH_QUESTIONS_ERROR,
    payload: error
  })
});

export default ACTIONS;
