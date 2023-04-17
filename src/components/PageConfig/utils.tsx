import { StyledButton, Text } from 'components';
import { Errors } from 'components/PageConfig/PageConfig';
import { Select } from 'components/Select';
import { AnswerValues } from 'redux/types';
import { Field } from 'utils/types';

export type ClickHandlerConfig = Pick<Field, 'value' | 'autocomplete' | 'name' | 'active' | 'type'>;

type GetFieldsJSXProps = {
  field: Field;
  value: AnswerValues;
  errors: Errors;
  onClickHandler: (values: ClickHandlerConfig) => void;
};

export const getFieldsJSX = ({
  field,
  errors,
  value: fieldValue,
  onClickHandler
}: GetFieldsJSXProps) => {
  const { type, name, jsx, value, placeholder, options, active, autocomplete } = field;

  switch (type) {
    case 'button':
      return (
        <StyledButton
          text={placeholder}
          onClick={() => onClickHandler({ name, type, value, active, autocomplete })}
          active={active}
          textStyles={{
            size: active ? 18 : 14
          }}
        />
      );
    case 'dropdown':
      return (
        <Select
          value={fieldValue as string}
          placeholder={placeholder}
          options={options ?? []}
          onChange={(e) => onClickHandler({ type, name, value: e.target.value })}
          error={name && errors[name]}
        />
      );
    case 'input':
      return (
        <div>
          <input
            value={fieldValue as string}
            style={{ width: 330, borderRadius: 20, padding: '8px 16px' }}
            placeholder={placeholder}
            onChange={(e) => onClickHandler({ type, name, value: e.target.value })}
          />
          <Text size={12} color="red">
            {name && errors[name]}
          </Text>
        </div>
      );
    case 'customJSX':
      return jsx;
  }
};
