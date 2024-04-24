import React from 'react';
import styled from 'styled-components';
import ItemComponent from '../../../components/common/ItemComponent';
import { useGiftItemSelect } from '../../../store';

const sampleList = [
  { itemName: '무지개 모자', count: 1 },
  { itemName: '무지개 모자', count: 2 },
  { itemName: '무지개 모자', count: 2 },
  { itemName: '무지개 모자', count: 2 },
];

const MessageGiftBoxComponent = styled.div`
  margin: 4px 1px 0 1px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  justify-content: space-between;
`;

const ClickBox = styled.div``;

function MessageGiftBox() {
  const { selectNum, setSelectNum } = useGiftItemSelect();

  const onClick = (num: number) => {
    setSelectNum(num);
  };

  return (
    <MessageGiftBoxComponent>
      {sampleList.map((item, idx) => (
        <ClickBox key={idx} onClick={(e) => onClick(idx + 1)}>
          <ItemComponent
            itemName={item.itemName}
            count={item.count}
            idx={idx}
          />
        </ClickBox>
      ))}
    </MessageGiftBoxComponent>
  );
}

export default MessageGiftBox;
