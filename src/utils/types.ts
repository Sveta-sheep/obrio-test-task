import { FieldName } from 'formTypes';
import { Answers } from 'redux/types';

export type Option = { value: string | number; placeholder: string };
export type ValidationType = 'required' | 'email';
export type FieldType = 'button' | 'dropdown' | 'input' | 'customJSX';

export type Field = {
  type: FieldType;
  placeholder: string;
  value: string | boolean;
  name?: FieldName<Answers>;
  active?: boolean;
  autocomplete?: boolean;
  options?: Option[];
  validation?: ValidationType[];
  jsx?: JSX.Element;
};

export type PageConfigType = {
  question: string | JSX.Element;
  fields: Field[];
};
