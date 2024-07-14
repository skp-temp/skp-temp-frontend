import React from 'react';
import styled from 'styled-components';
import SummaryItem from './SummaryItem';
import { SEMANTIC_COLOR, GRAY_COLOR } from '../../../constants';

const ItemsComponent = styled.div``;
const DaysText = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: auto;
  padding-left: 80px;
`;
const DaysTextItem = styled.div<{ $color: string }>`
  display: flex;
  justify-content: center;
  color: ${(prop) => prop.$color};
  width: 24px;
  height: auto;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  word-wrap: break-word;
`;

function SummaryItemsComponent() {
  const week: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  const getNowDayTrue = (idx: number) => {
    let nowDay: number = new Date().getDay();
    if (nowDay === idx) return true;
    else return false;
  };

  return (
    <ItemsComponent>
      <DaysText>
        {week.map((i, idx) => (
          <DaysTextItem
            key={idx}
            $color={
              getNowDayTrue(idx) ? SEMANTIC_COLOR.BLUE : GRAY_COLOR.GRAY_400
            }
          >
            {i}
          </DaysTextItem>
        ))}
      </DaysText>
      <SummaryItem />
    </ItemsComponent>
  );
}

export default SummaryItemsComponent;
