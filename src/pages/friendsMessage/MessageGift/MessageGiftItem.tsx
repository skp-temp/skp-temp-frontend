import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../../constants';

const MessageGiftItemComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
`;

const GiftImageBox = styled.div`
  position: relative;
  margin-top: 24px;
  background-color: ${GRAY_COLOR.GRAY_100};
  border-radius: 12px;
  border-width: 2px;
  width: 98px;
  height: 98px;
`;

const GiftText = styled.div`
  color: ${GRAY_COLOR.GRAY_600};
  margin-top: 8px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
  text-align: center;
`;

function MessageGiftItem() {
  return (
    <MessageGiftItemComponent>
      <GiftImageBox />
      <GiftText>무지개 모자</GiftText>
    </MessageGiftItemComponent>
  );
}

export default MessageGiftItem;
