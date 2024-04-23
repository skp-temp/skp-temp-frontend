import React from 'react';
import styled from 'styled-components';
import ItemComponent from '../../../components/common/Item';

const MessageGiftBoxComponent = styled.div`
  margin: 4px 1px 0 1px;
  display: grid;
  grid-template-columns: 98px 98px 98px;
  justify-content: space-between;
`;

function MessageGiftBox() {
  return (
    <MessageGiftBoxComponent>
      <ItemComponent itemName="무지개 모자" count={1} />
      <ItemComponent itemName="무지개 모자" count={2} />
      <ItemComponent itemName="무지개 모자" count={2} />
      <ItemComponent itemName="무지개 모자" count={2} />
    </MessageGiftBoxComponent>
  );
}

export default MessageGiftBox;
