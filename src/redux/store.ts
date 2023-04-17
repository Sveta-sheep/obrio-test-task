import { createStore, Store } from 'redux';
import { questionnaireReducer } from 'redux/reducers/questionnaireReducer';
import { QuestionnaireAction, QuestionnaireState } from 'redux/types';

export const store: Store<QuestionnaireState, QuestionnaireAction> =
  createStore(questionnaireReducer);
