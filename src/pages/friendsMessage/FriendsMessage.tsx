import React from 'react';
import styled from 'styled-components';
import FriendsMessageHeader from './FriendsMessageHeader';
import MessageCard from './MessageCard';
import SendGift from './SendGift';
import LargeCTAButton from '../../components/common/LargeCTAButton';
import { THEME_COLOR } from '../../constants';
import { useMessageInputData } from '../../store';

const BUTTON_STRING = '응원 메세지 보내기';

const FriendsMessageComponent = styled.div`
  padding: 0 24px 0 24px;
  height: 100vh;
  background-color: ${THEME_COLOR.WORKOUT[100]};
`;

function FriendsMessage() {
  const { inputData } = useMessageInputData();

  return (
    <FriendsMessageComponent>
      <FriendsMessageHeader />
      <MessageCard />
      <SendGift />
      <LargeCTAButton
        isActive={inputData ? true : false}
        text={BUTTON_STRING}
      />
    </FriendsMessageComponent>
  );
}

export default FriendsMessage;
