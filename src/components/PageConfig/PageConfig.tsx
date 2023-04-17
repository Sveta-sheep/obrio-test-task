import { Footer } from 'components/Footer';
import { ClickHandlerConfig, getFieldsJSX } from 'components/PageConfig/utils';
import { Text } from 'components/Text';
import { FieldName } from 'formTypes';
import { getAge, getValueFromFieldName, questionUpdater, validate } from 'helpers';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goToNextPage, setAnswer } from 'redux/actions/questionnaireActions';
import { Answers, QuestionnaireState } from 'redux/types';
import styled from 'styled-components';
import { PageConfigType } from 'utils/types';

export type Errors = Partial<Record<FieldName<Answers>, string>>;

export const PageConfig = ({ question, fields }: PageConfigType) => {
  const dispatch = useDispatch();
  const { answers } = useSelector((state: QuestionnaireState) => state);

  useEffect(() => {
    if (Object.values(answers.dateOfBirth || {}).every(Boolean)) {
      const age = getAge(answers.dateOfBirth!);
      dispatch(setAnswer('age', age));
    }
  }, [answers.dateOfBirth, dispatch]);

  const [errors, setErrors] = useState<Errors>({});

  const onClickHandler = ({ type, value, name, active, autocomplete }: ClickHandlerConfig) => {
    const setValueToStore = () => {
      name && dispatch(setAnswer(name, value));
    };

    switch (type) {
      case 'button':
        if (autocomplete) {
          setValueToStore();
          dispatch(goToNextPage());
        } else if (active) {
          const errors = validate(
            answers,
            fields.map((field) => field.name) as FieldName<Answers>[]
          );

          if (Object.values(errors).some(Boolean)) setErrors(errors);
          else {
            setErrors({});
            dispatch(goToNextPage());
          }
        }
        break;
      case 'dropdown':
      case 'input':
        setValueToStore();
        break;
    }
  };

  return (
    <Box>
      <div>
        <div style={{ marginBottom: 30 }}>
          {typeof question === 'string' ? (
            <Text weight={700} size={24} color="#333333">
              {questionUpdater(answers, question)}
            </Text>
          ) : (
            question
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20
          }}>
          {fields.map((field, index) => (
            <Fragment key={index}>
              {getFieldsJSX({
                field,
                onClickHandler,
                errors,
                value: field.name ? getValueFromFieldName(field.name, answers) : ''
              })}
            </Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 580px;
  max-width: 370px;
`;
