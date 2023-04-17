import { FieldName } from 'formTypes';

export type ActionTypes = 'GO_TO_NEXT_QUESTION' | 'GO_TO_PREV_QUESTION' | 'SET_ANSWER';
export type AnswerValues = Answers[keyof Answers];
export type MakingDecisionsType = 'heart' | 'both' | 'head';
export type RelationshipStatus = 'single' | 'inRelationship';
export type DateOfBirth = {
  day: string;
  month: string;
  year: string;
};

export type Answers = Partial<{
  gender: string;
  age: number;
  dateOfBirth: DateOfBirth;
  relationshipStatus: RelationshipStatus;
  isParent: boolean;
  isSingleParent: boolean;
  feelingsInLastRelations: string;
  describingStatement: string;
  makingDecisions: MakingDecisionsType;
  email: string;
}>;

export type QuestionnaireAction = {
  type: ActionTypes;
  name: FieldName<Answers>;
  value: AnswerValues;
};

export type QuestionnaireState = {
  pageIndex: number;
  answers: Answers;
};
