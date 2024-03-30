import React from 'react';
import styled from 'styled-components';
import EmotionRankItem from './EmotionRankItem';
import { GRAY_COLOR } from '../../../constants';

export type categoryEmotionType = {
  categoryName: string;
  emotionCounts: number[];
};

const DetailComponent = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${GRAY_COLOR.WHITE};
  width: auto;
  height: 266px;
  border-radius: 16px;
  padding: 24px 20px 20px 20px;
`;

const DetailItems = styled.div`
  width: 128px;
  display: flex;
  flex-direction: column;
`;
const categoryEmotions1: categoryEmotionType[] = [
  {
    categoryName: '운동',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '금전',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '식습관',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '뷰티',
    emotionCounts: [6, 2],
  },
];

const categoryEmotions2: categoryEmotionType[] = [
  {
    categoryName: '행복',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '공부',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '갓생',
    emotionCounts: [6, 2],
  },
  {
    categoryName: '반려',
    emotionCounts: [6, 2],
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
