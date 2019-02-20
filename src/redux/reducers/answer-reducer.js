import answerAction from '../actions/answer-action';

const initState = {
  answerList: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case answerAction.ADD_ANSWER:
      return { ...state, answerList: [...state.answerList, payload] };
    case answerAction.RESET_ANSWER:
      return { ...state, answerList: [] };
    default:
      return state;
  }
};
