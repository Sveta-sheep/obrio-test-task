import { Text } from 'components/Text';
import { useSelector } from 'react-redux';
import { QuestionnaireState } from 'redux/types';
import styled from 'styled-components';

export const Footer = () => {
  const { pageIndex } = useSelector((state: QuestionnaireState) => state);

  return (
    <>
      {pageIndex === 0 ? (
        <FooterTextWrapper>
          <Text size={12} color="#4F4F4F">
            By continuing I agree with{' '}
            <a style={{ fontSize: 12, color: '#4F4F4F', textDecoration: 'underline' }} href="#">
              Privacy policy
            </a>{' '}
            and{' '}
            <a style={{ fontSize: 12, color: '#4F4F4F', textDecoration: 'underline' }} href="#">
              Terms of use
            </a>
            .
          </Text>
          <Text size={12} color="#4F4F4F" style={{ textAlign: 'center' }}>
            Obrio Limited, Athalassas, 62, MEZZANINE, Strovolos, 2012, Nicosia, Cyprus
          </Text>
        </FooterTextWrapper>
      ) : (
        <FooterTextWrapper>
          <Text size={12} color={pageIndex === 6 ? '#CDCDCD' : '#4F4F4F'}>
            Nicosia, Cyprus
          </Text>
        </FooterTextWrapper>
      )}
    </>
  );
};

const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 370px;
`;
