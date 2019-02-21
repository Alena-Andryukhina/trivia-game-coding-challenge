import configureMockStore from 'redux-mock-store';
import answerActions from './answer-action';

const mockStore = configureMockStore();

describe('Answer Actions', () => {
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe('addAnswer', () => {
    it('returns action of type ADD_ANSWER with the right payload', () => {
      const answers = [];
      const action = store.dispatch(answerActions.addAnswer(answers));
      expect(action).toEqual({
        type: answerActions.ADD_ANSWER,
        payload: answers,
      });
    });
  });

  describe('resetAnswers', () => {
    it('returns action of type RESET_ANSWER', () => {
      const action = store.dispatch(answerActions.resetAnswers());
      expect(action).toEqual({
        type: answerActions.RESET_ANSWER,
      });
    });
  });
});
