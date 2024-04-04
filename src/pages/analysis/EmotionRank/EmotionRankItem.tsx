import React from 'react';
import styled from 'styled-components';
import { categoryEmotionType } from './EmotionRankDetail';
import { SEMANTIC_COLOR } from '../../../constants';

const RankItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-bottom: 14px;
`;

const CategoryName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'PretendardBold';
  line-height: 14px;
  word-wrap: break-word;
`;

const CategoryComponent = styled.div`
  display: flex;
`;

const FirstRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstRankImage = styled.div`
  background-image: url('images/analysis/CategoryEmotion.png');
  background-size: cover;
  width: 40px;
  height: 39px;
`;

const FirstRankText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${SEMANTIC_COLOR.BLUE};
  font-size: 12px;
  font-family: 'PretendardBold';
  line-height: 12px;
  word-wrap: break-word;
`;

const SecondRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
`;

const SecondRankImageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 38px;
`;

const SecondRankImage = styled.div`
  background-image: url('images/analysis/CategoryEmotion.png');
  background-size: cover;
  width: 28px;
  height: 27px;
`;

const SecondRankText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: 'PretendardBold';
  line-height: 12px;
  word-wrap: break-word;
`;

function EmotionRankItem(props: { info: categoryEmotionType }) {
  return (
    <RankItemComponent>
      <CategoryName>{props.info.categoryName}</CategoryName>
      <CategoryComponent>
        <FirstRank>
          <FirstRankImage />
          <FirstRankText>{props.info.emotionCounts[0]}</FirstRankText>
        </FirstRank>
        <SecondRank>
          <SecondRankImageComponent>
            <SecondRankImage />
          </SecondRankImageComponent>
          <SecondRankText>{props.info.emotionCounts[1]}</SecondRankText>
        </SecondRank>
      </CategoryComponent>
    </RankItemComponent>
  );
}

export default EmotionRankItem;
