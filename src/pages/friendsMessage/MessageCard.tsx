import React from 'react';
import styled from 'styled-components';
import MessageCardText from './MessageCardText';
import { useMessageInputData } from '../../store';
import { THEME_COLOR } from '../../constants';
import baby from '../../assets/images/friendsMessage/baby.png';

const MAX_LENGTH = 120;

const MessageCardComponent = styled.div`
  background-color: ${THEME_COLOR.WORKOUT[200]};
  width: 100%;
  height: 280px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 4px 16px rgba(28, 28, 30, 0.1);
`;

const MessageCardBox = styled.div`
  padding: 28px;
`;

const MessageTextCount = styled.div`
  position: absolute;
  color: ${THEME_COLOR.WORKOUT[300]};
  left: 24px;
  bottom: 16px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
`;

const MessageImage = styled.div`
  position: absolute;
  background-image: url(${baby});
  background-size: cover;
  width: 98px;
  height: 98px;
  right: 0px;
  bottom: 0px;
`;

function MessageCard() {
  const { inputData } = useMessageInputData();

  return (
    <MessageCardComponent>
      <MessageCardBox>
        <MessageCardText />
      </MessageCardBox>
      <MessageTextCount>
        {inputData.length}/{MAX_LENGTH}
      </MessageTextCount>
      <MessageImage />
    </MessageCardComponent>
  );
}

export default MessageCard;
