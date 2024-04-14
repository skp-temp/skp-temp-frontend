import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../../constants';

const ItemComponent = styled.div`
  display: flex;
  height: 24px;
  margin-top: 6px;
`;

const SummaryTitle = styled.div`
  display: block;
  color: ${GRAY_COLOR.GRAY_800};
  width: 72px;
  height: 24px;
  margin-right: 8px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 24px;
  letter-spacing: -0.4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SummaryResult = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  width: 100%;
  height: auto;
`;

const ResultItem = styled.div<{ $bool: string }>`
  background-image: url('images/analysis/CategoryEmotion${(props) =>
    props.$bool}.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  margin: 0px 0.5px;
  width: 23px;
  height: 22px;
`;

const tempList = [1, 1, 0, 1, 1, 1, 0];

const SummaryItem = () => {
  return (
    <ItemComponent>
      <SummaryTitle>매일 깃허브 남</SummaryTitle>
      <SummaryResult>
        {tempList.map((i, idx) => (
          <ResultItem $bool={i ? '' : 'Null'} key={idx} />
        ))}
      </SummaryResult>
    </ItemComponent>
  );
};

export default SummaryItem;
