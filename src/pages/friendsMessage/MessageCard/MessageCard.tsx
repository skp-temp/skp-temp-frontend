import React from 'react';
import styled from 'styled-components';
import MessageCardText from './MessageCardText';
import { useMessageInputData } from '../../../store';
import { THEME_COLOR } from '../../../constants';
import baby from '../../../assets/images/friendsMessage/baby.png';

const MAX_LENGTH = 120;

const MessageCardComponent = styled.div`
  padding-top: 24px;
  background-color: ${THEME_COLOR.WORKOUT[200]};
  width: 312px;
  height: 280px;
  border-radius: 20px;
  position: relative;
`;

const MessageTextCount = styled.div`
  position: absolute;
  color: ${THEME_COLOR.WORKOUT[300]};
  left: 24px;
  bottom: 16px;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
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
      <MessageCardText />
      <MessageTextCount>
        {inputData.length}/{MAX_LENGTH}
      </MessageTextCount>
      <MessageImage />
    </MessageCardComponent>
  );
}

export default MessageCard;
