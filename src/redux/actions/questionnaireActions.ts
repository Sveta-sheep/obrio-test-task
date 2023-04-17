import { FieldName } from 'formTypes';
import { Answers, AnswerValues, QuestionnaireAction } from 'redux/types';

export const goToNextPage = (): Pick<QuestionnaireAction, 'type'> => ({
  type: 'GO_TO_NEXT_QUESTION'
});
export const goToPrevPage = (): Pick<QuestionnaireAction, 'type'> => ({
  type: 'GO_TO_PREV_QUESTION'
});

export const setAnswer = (name: FieldName<Answers>, value: AnswerValues) => ({
  type: 'SET_ANSWER',
  name,
  value
});
