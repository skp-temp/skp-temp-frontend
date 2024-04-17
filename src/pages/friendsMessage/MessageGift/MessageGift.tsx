import React from 'react';
import styled from 'styled-components';
import MessageGiftHeader from './MessageGiftHeader';
import MessageGiftBox from './MessageGiftBox';

const MessageGiftComponent = styled.div`
  padding: 0 24px 0 24px;
  height: 100vh;
`;

function MessageGift() {
  return (
    <MessageGiftComponent>
      <MessageGiftHeader />
      <MessageGiftBox />
    </MessageGiftComponent>
  );
}

export default MessageGift;
