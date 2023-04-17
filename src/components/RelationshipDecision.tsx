import { StyledButton } from 'components';
import { Footer } from 'components/Footer';
import { Text } from 'components/Text';
import { findZodiacSign } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { goToNextPage, goToPrevPage } from 'redux/actions/questionnaireActions';
import { MakingDecisionsType, QuestionnaireState } from 'redux/types';
import styled from 'styled-components';

type ContentConfigurationType = {
  url: string;
  text: string;
};

export const RelationshipDecision = () => {
  const { answers } = useSelector((state: QuestionnaireState) => state);
  const zodiacSign = findZodiacSign(answers.dateOfBirth!);
  const dispatch = useDispatch();

  const dynamicJSX: Record<MakingDecisionsType, ContentConfigurationType> = {
    heart: {
      url: '/heart.png',
      text: `Based on our data, 49% of ${zodiacSign} people also make decisions with their heart. But don't worry, we'll consider that while creating your guidance plan.`
    },
    head: {
      url: '/head.png',
      text: `Based on our data, 39% of ${zodiacSign} people also make decisions with their head. But don't worry, we'll consider that while creating your guidance plan.`
    },
    both: {
      url: '/both.png',
      text: `Wonderful! Based on our data, only the top 17% of ${zodiacSign} people make decisions with their heart and head. Using both in equal measure is the key to feeling harmonious in your relationships.`
    }
  };

  if (!answers.makingDecisions) return null;

  const { url, text } = dynamicJSX[answers.makingDecisions];

  const onBackClickHandler = () => {
    dispatch(goToPrevPage());
  };

  const onNextClickHandler = () => {
    dispatch(goToNextPage());
  };

  return (
    <Box>
      <img src={url} alt={url} />
      <Text style={{ textAlign: 'center' }} size={16} weight={600} color="#FBFBFF">
        {text}
      </Text>
      <ButtonsWrapper>
        <StyledButton
          styles={{ width: 160, backgroundColor: 'transparent', border: '1px solid white' }}
          text="Back"
          textStyles={{ color: 'white' }}
          onClick={onBackClickHandler}
        />
        <StyledButton
          styles={{ width: 160, backgroundColor: 'white' }}
          text="Next"
          textStyles={{ color: '#6A3AA2' }}
          onClick={onNextClickHandler}
        />
      </ButtonsWrapper>
      <Footer />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 340px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 88px;
`;
