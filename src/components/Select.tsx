import { Text } from 'components/Text';
import { ChangeEvent, CSSProperties } from 'react';
import { Option } from 'utils/types';

type SelectProps = {
  options: Option[];
  placeholder: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  style?: CSSProperties;
  value?: string | number;
};

export const Select = ({ onChange, error, options, style, value, placeholder }: SelectProps) => {
  return (
    <div>
      <select
        style={{
          width: 220,
          borderRadius: 20,
          backgroundColor: '#FFF0F0',
          padding: '8px',
          ...style
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}>
        {options?.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.placeholder}
          </option>
        ))}
      </select>
      <Text size={12} color={'red'}>
        {error}
      </Text>
    </div>
  );
};
