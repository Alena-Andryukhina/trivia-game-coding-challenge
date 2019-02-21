import configureMockStore from 'redux-mock-store';
import questionsActions from './questions-action';

const mockStore = configureMockStore();

describe('Questions Actions', () => {
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe('fetchQuestionsRequest', () => {
    it('returns action of type FETCH_QUESTIONS_REQUEST', () => {
      const action = store.dispatch(questionsActions.fetchQuestionsRequest());
      expect(action).toEqual({
        type: questionsActions.FETCH_QUESTIONS_REQUEST,
      });
    });
  });

  describe('fetchQuestionsSuccess', () => {
    it('returns action of type FETCH_QUESTIONS_SUCCESS with the right payload', () => {
      const questions = [];
      const action = store.dispatch(questionsActions.fetchQuestionsSuccess(questions));
      expect(action).toEqual({
        type: questionsActions.FETCH_QUESTIONS_SUCCESS,
        payload: questions,
      });
    });
  });

  describe('fetchQuestionsError', () => {
    it('returns action of type FETCH_QUESTIONS_ERROR with the right payload', () => {
      const error = 'Error';
      const action = store.dispatch(questionsActions.fetchQuestionsError(error));
      expect(action).toEqual({
        type: questionsActions.FETCH_QUESTIONS_ERROR,
        payload: error,
      });
    });
  });
});
