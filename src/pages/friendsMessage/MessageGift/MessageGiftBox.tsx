import React from 'react';
import styled from 'styled-components';
import MessageGiftItem from './MessageGiftItem';

const MessageGiftBoxComponent = styled.div`
  margin-top: 4px;
`;

function MessageGiftBox() {
  return (
    <MessageGiftBoxComponent>
      <MessageGiftItem />
    </MessageGiftBoxComponent>
  );
}

export default MessageGiftBox;
