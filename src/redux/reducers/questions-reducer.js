import questionsAction from "../actions/questions-action";

const initState = {
  list: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case questionsAction.FETCH_QUESTIONS_SUCCESS:
      const questions = action.payload;
      return { ...state, list: questions };
    default:
      return state;
  }
};
