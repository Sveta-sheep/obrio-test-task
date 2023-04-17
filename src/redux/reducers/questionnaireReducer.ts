import { getParsedObject } from 'helpers';
import { QuestionnaireAction, QuestionnaireState } from 'redux/types';

const initialState: QuestionnaireState = {
  pageIndex: 0,
  answers: {}
};

export const questionnaireReducer = (
  state: QuestionnaireState = initialState,
  action: QuestionnaireAction
) => {
  switch (action.type) {
    case 'GO_TO_NEXT_QUESTION':
      return {
        ...state,
        pageIndex: state.pageIndex + 1
      };

    case 'GO_TO_PREV_QUESTION':
      return {
        ...state,
        pageIndex: state.pageIndex - 1
      };

    case 'SET_ANSWER':
      return {
        ...state,
        answers: {
          ...state.answers,
          ...getParsedObject(action.name, action.value, state.answers.dateOfBirth)
        }
      };

    default:
      return state;
  }
};
