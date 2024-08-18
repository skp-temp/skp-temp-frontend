import React from 'react';
import styled from 'styled-components';
import { categoryEmotionType } from './EmotionRankDetail';
import { SEMANTIC_COLOR, CATEGORY_OBJECT } from '../../../constants';

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
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
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

const FirstRankImage = styled.div<{ $category: string; $emotion: string }>`
  background-image: url('images/analysis/rank/${(props) =>
    props.$category}_large_${(props) => props.$emotion}.png');
  background-size: cover;
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
`;

const FirstRankText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${SEMANTIC_COLOR.BLUE};
  font-size: 12px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
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
  height: 40px;
  margin-bottom: 5px;
`;

const SecondRankImage = styled.div<{ $category: string; $emotion: string }>`
  background-image: url('images/analysis/rank/${(props) =>
    props.$category}_small_${(props) => props.$emotion}.png');
  background-size: cover;
  width: 40px;
  height: 40px;
`;

const SecondRankText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
  line-height: 12px;
  word-wrap: break-word;
`;

function EmotionRankItem(props: { info: categoryEmotionType }) {
  return (
    <RankItemComponent>
      <CategoryName>{CATEGORY_OBJECT[props.info.categoryName]}</CategoryName>
      <CategoryComponent>
        <FirstRank>
          {props.info.emotionCounts[0] !== 0 ? (
            <FirstRankImage
              $category={props.info.categoryName.toLowerCase()}
              $emotion={props.info.emotion[0].toLowerCase()}
            />
          ) : (
            <FirstRankImage
              $category={props.info.categoryName.toLowerCase()}
              $emotion={'gray'}
            />
          )}
          <FirstRankText>{props.info.emotionCounts[0]}</FirstRankText>
        </FirstRank>
        <SecondRank>
          <SecondRankImageComponent>
            {props.info.emotion.length === 2 ? (
              <SecondRankImage
                $category={props.info.categoryName.toLowerCase()}
                $emotion={props.info.emotion[1].toLowerCase()}
              />
            ) : (
              <SecondRankImage $category={'null'} $emotion={'null'} />
            )}
          </SecondRankImageComponent>
          <SecondRankText>{props.info.emotionCounts[1]}</SecondRankText>
        </SecondRank>
      </CategoryComponent>
    </RankItemComponent>
  );
}

export default EmotionRankItem;
