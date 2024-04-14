import React from 'react';
import styled from 'styled-components';
import { categoryInfo } from './CategoryRankDetail';
import CategoryRankItemGraph from './CategoryRankItemGraph';
import { GRAY_COLOR, SEMANTIC_COLOR } from '../../../constants';

const OPACITY: number[] = [1, 0.8, 0.6, 0.4, 0.3, 0.2, 0.15, 0.1];

const ItemComponent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 14px;
  align-items: center;
`;
const CategoryImage = styled.div<{ $categoryName: string }>`
  background-image: url('images/analysis/${(props) =>
    props.$categoryName}.svg');
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;
const CategoryText = styled.div`
  color: ${GRAY_COLOR.GRAY_700};
  width: 48px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
`;

const CategoryCount = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 14px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
  margin-left: 8px;
`;

function CategoryRankItem(props: { category: categoryInfo; maxCount: number }) {
  const getWidth = () => {
    let result: number = (props.category.categoryCount / props.maxCount) * 50;
    return result;
  };

  return (
    <ItemComponent>
      <CategoryImage $categoryName={props.category.categoryName} />
      <CategoryText>{props.category.categoryNameKr}</CategoryText>
      <CategoryRankItemGraph
        width={getWidth()}
        color={OPACITY[props.category.rank - 1]}
      />
      <CategoryCount
        $color={
          props.category.rank === 1 ? SEMANTIC_COLOR.BLUE : GRAY_COLOR.GRAY_900
        }
      >
        {props.category.categoryCount}
      </CategoryCount>
    </ItemComponent>
  );
}

export default CategoryRankItem;
