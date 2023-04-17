import { Text } from 'components';
import { TextProps } from 'components/Text';
import { CSSProperties } from 'styled-components';
import { ButtonWrapper } from './styles';

type StyledButtonProps = {
  text: string;
  onClick?: () => void;
  active?: boolean;
  textStyles?: TextProps;
  styles?: CSSProperties;
};

export const StyledButton = ({ active, onClick, text, textStyles, styles }: StyledButtonProps) => (
  <ButtonWrapper style={styles} active={active} onClick={onClick}>
    <Text color={active ? 'white' : 'black'} {...textStyles}>
      {text}
    </Text>
  </ButtonWrapper>
);
