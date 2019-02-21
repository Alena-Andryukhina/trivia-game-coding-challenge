import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import questionsApi from './questions-api';

describe('questionsApi fetchQuestions', function() {
  test('`fetchQuestions` returns an array of questions', done => {
    const mock = new MockAdapter(axios);
    const response = {
      results: new Array(10).fill({}),
    };
    mock.onGet('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean').reply(200, response);

    questionsApi.fetchQuestions().then(data => {
      expect(data.length).toBe(10);
      done();
    });
  });
});
