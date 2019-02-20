import questionsAction from '../actions/questions-action';

const initState = {
  questionsList: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case questionsAction.FETCH_QUESTIONS_REQUEST: {
      return { ...initState };
    }
    case questionsAction.FETCH_QUESTIONS_SUCCESS:
      return { ...state, questionsList: action.payload };
    default:
      return state;
  }
};
