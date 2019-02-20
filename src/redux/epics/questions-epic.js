import { from, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import questionsApi from '../../services/questions-api';
import questionsActions from '../actions/questions-action';

const fetchQuestionsEpic = action$ =>
  action$.pipe(
    ofType(questionsActions.FETCH_QUESTIONS_REQUEST),
    mergeMap(() =>
      from(questionsApi.fetchQuestions()).pipe(
        map(questionsActions.fetchQuestionsSuccess),
        catchError(error => of(questionsActions.fetchQuestionsError(error)))
      )
    )
  );

export default combineEpics(fetchQuestionsEpic);
