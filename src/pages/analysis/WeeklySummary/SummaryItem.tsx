import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../../constants';

const ItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const SummaryItemOne = styled.div`
  display: flex;
  height: 24px;
  margin: 4px 0px;
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

const tempItemList = [
  {
    title: '매일매일 깃허브 남',
    list: [1, 1, 0, 1, 1, 1, 0],
  },
  {
    title: '스쿼트 1500개',
    list: [1, 1, 0, 0, 1, 1, 1],
  },
];

const SummaryItem = () => {
  return (
    <ItemComponent>
      {tempItemList.map((i, i_idx) => (
        <SummaryItemOne key={i_idx}>
          <SummaryTitle>{i.title}</SummaryTitle>
          <SummaryResult>
            {i.list.map((j, j_idx) => (
              <ResultItem $bool={j ? '' : 'Null'} key={j_idx} />
            ))}
          </SummaryResult>
        </SummaryItemOne>
      ))}
    </ItemComponent>
  );
};

export default SummaryItem;
