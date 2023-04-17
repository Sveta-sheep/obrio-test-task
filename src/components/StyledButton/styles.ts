import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button<{ active?: boolean }>`
  ${({ active }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 328px;
    height: 50px;
    border-radius: 16px;
    background: ${active
      ? 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)'
      : '#EAEEF7'};

    ${active
      ? css`
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 16px;
        `
      : css`
          border: 1px solid #e0e0e0;
          box-shadow: 2px 2px 6px rgba(84, 60, 151, 0.25);
        `}
    :hover {
      cursor: pointer;
      background: linear-gradient(
        165.54deg,
        #141333 -33.39%,
        #202261 15.89%,
        #543c97 55.84%,
        #6939a2 74.96%
      );

      p {
        color: white;
      }
    }
  `}
`;
