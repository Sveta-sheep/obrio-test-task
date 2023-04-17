import { PropsWithChildren } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

export type TextProps = PropsWithChildren<{
  size?: number;
  color?: string;
  weight?: number;
  style?: CSSProperties;
}>;

export const Text = ({ children, ...styleProps }: TextProps) => (
  <TextWrapper style={styleProps.style} {...styleProps}>
    {children}
  </TextWrapper>
);

const TextWrapper = styled.p<Pick<TextProps, 'color' | 'weight' | 'size'>>`
  ${({ color = 'white', weight = 400, size = 18 }) => css`
    font-size: ${size}px;
    color: ${color};
    font-weight: ${weight};
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  `}
`;
