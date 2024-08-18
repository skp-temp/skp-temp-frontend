import React from 'react';
import styled from 'styled-components';
import EmotionRankItem from './EmotionRankItem';
import { GRAY_COLOR, CategoryType } from '../../../constants';

export type categoryEmotionType = {
  categoryName: CategoryType;
  emotionCounts: number[];
  emotion: string[];
};

const DetailComponent = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${GRAY_COLOR.WHITE};
  width: auto;
  height: 266px;
  border-radius: 16px;
  padding: 24px 20px 34px 20px;
`;

const DetailItems = styled.div`
  width: 128px;
  display: flex;
  flex-direction: column;
`;
const categoryEmotions1: categoryEmotionType[] = [
  {
    categoryName: 'WORKOUT',
    emotionCounts: [6, 2],
    emotion: ['MAD', 'SAD'],
  },
  {
    categoryName: 'MONEY',
    emotionCounts: [6, 2],
    emotion: ['HAPPY', 'SOSO'],
  },
  {
    categoryName: 'DIET',
    emotionCounts: [6, 2],
    emotion: ['MAD', 'HAPPY'],
  },
  {
    categoryName: 'BEAUTY',
    emotionCounts: [6, 2],
    emotion: ['SOSO', 'MAD'],
  },
];

const categoryEmotions2: categoryEmotionType[] = [
  {
    categoryName: 'HAPPINESS',
    emotionCounts: [6, 2],
    emotion: ['LOVELY', 'SAD'],
  },
  {
    categoryName: 'STUDY',
    emotionCounts: [0, 0],
    emotion: [],
  },
  {
    categoryName: 'HUSTLE',
    emotionCounts: [6, 0],
    emotion: ['SOSO'],
  },
  {
    categoryName: 'PET',
    emotionCounts: [6, 2],
    emotion: ['LOVELY', 'LOVELY'],
  },
];

function EmotionRankDetail() {
  return (
    <DetailComponent>
      <DetailItems>
        {categoryEmotions1.map((item) => (
          <EmotionRankItem key={item.categoryName} info={item} />
        ))}
      </DetailItems>
      <DetailItems>
        {categoryEmotions2.map((item) => (
          <EmotionRankItem key={item.categoryName} info={item} />
        ))}
      </DetailItems>
    </DetailComponent>
  );
}

export default EmotionRankDetail;
