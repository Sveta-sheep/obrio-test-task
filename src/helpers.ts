import { Errors } from 'components/PageConfig/PageConfig';
import { FieldName } from 'formTypes';
import { Answers, AnswerValues, DateOfBirth } from 'redux/types';
import { allFields } from 'utils/getPageConfigs';

export const getParsedObject = (
  fieldName: FieldName<Answers>,
  value: AnswerValues,
  deeperObject: Answers['dateOfBirth']
) => {
  const [first, second] = fieldName.split('.');

  return { [first]: second ? { ...deeperObject, [second]: value } : value };
};

export const getValueFromFieldName = (fieldName: FieldName<Answers>, answers: Answers) => {
  if (fieldName.includes('.')) {
    const [first, second] = fieldName.split('.');

    return (answers[first as keyof Answers] as any)?.[second];
  } else {
    return answers[fieldName as keyof Answers];
  }
};

export const questionUpdater = (answers: Answers, question: string) => {
  let newText: string = question;

  Object.entries(answers).forEach(([key, value]) => {
    newText = newText.replace(`{${key}}`, value as string);
  });

  return newText;
};

const regExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const validate = (answers: Partial<Answers>, fieldNames: FieldName<Answers>[]) => {
  const errors: Errors = {};

  fieldNames.forEach((name) => {
    const currentField = allFields.find((field) => field.name === name);
    if (!currentField?.validation?.length) return;

    currentField.validation.forEach((validation) => {
      switch (validation) {
        case 'required':
          if (!getValueFromFieldName(name, answers)) errors[name] = 'This field is required';
          break;
        case 'email':
          if (!regExp.test(getValueFromFieldName(name, answers))) errors[name] = 'Invalid email';
          break;
      }
    });
  });

  return errors;
};

export const getAge = (dateOfBirth: DateOfBirth) => {
  const { day, month, year } = dateOfBirth || {};
  const date = new Date();
  const birthdayDate = new Date(`${year}-${month}-${day}`);
  return date.getFullYear() - birthdayDate.getFullYear();
};

export const findZodiacSign = (dateOfBirth: DateOfBirth) => {
  const birthdayDate = new Date(`${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`);
  const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  const signs = [
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn'
  ];
  let month = birthdayDate.getMonth();
  const day = birthdayDate.getDate();
  if (month == 0 && day <= 20) {
    month = 11;
  } else if (day < days[month]) {
    month--;
  }
  return signs[month];
};
