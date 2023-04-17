import { ArrowLeft, Logo, LogoWhite } from 'assets/icons';
import { PageConfig } from 'components/PageConfig/PageConfig';
import { RelationshipDecision } from 'components/RelationshipDecision';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goToPrevPage } from 'redux/actions/questionnaireActions';
import { QuestionnaireState } from 'redux/types';
import styled from 'styled-components';
import { getPageConfigs } from 'utils/getPageConfigs';

export const QuestionnaireBox = () => {
  const { pageIndex, answers } = useSelector((state: QuestionnaireState) => state);
  const dispatch = useDispatch();

  const onPrevButtonClickHandler = () => {
    dispatch(goToPrevPage());
  };

  const pageConfigs = getPageConfigs(answers);
  const isRelationshipDecisionPage = pageIndex === 6;

  const headerJSX = (
    <HeaderWrapper>
      {pageIndex !== 0 && (
        <ArrowLeftWrapper onClick={onPrevButtonClickHandler}>
          <ArrowLeft color={isRelationshipDecisionPage ? '#FAFAFA' : '#333333'} />
        </ArrowLeftWrapper>
      )}
      {isRelationshipDecisionPage ? <LogoWhite /> : <Logo />}
    </HeaderWrapper>
  );

  if (!pageConfigs[pageIndex]) return headerJSX;

  return (
    <Box
      background={
        isRelationshipDecisionPage
          ? 'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)'
          : ''
      }>
      {headerJSX}
      {pageIndex === 6 ? <RelationshipDecision /> : <PageConfig {...pageConfigs[pageIndex]} />}
    </Box>
  );
};

const Box = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ background = '#FFF0F0' }) => background};
  gap: 30px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0;
  position: relative;
  width: 100%;
`;

const ArrowLeftWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 10%;

  :hover {
    cursor: pointer;
  }
`;
