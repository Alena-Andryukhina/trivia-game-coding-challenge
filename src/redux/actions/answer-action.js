import { ADD_ANSWER, RESET_ANSWER } from '../../constants';

const ACTIONS = Object.freeze({
  ADD_ANSWER,
  RESET_ANSWER,

  addAnswer: answer => ({
    type: ADD_ANSWER,
    payload: answer,
  }),
  resetAnswers: () => ({
    type: RESET_ANSWER,
  }),
});

export default ACTIONS;
