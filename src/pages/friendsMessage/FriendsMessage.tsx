import React from 'react';
import styled from 'styled-components';
import FriendsMessageHeader from './FriendsMessageHeader';
import MessageCard from './MessageCard/MessageCard';
import SendGift from './SendGift';
import SendGiftButton from './SendGiftButton';
import { THEME_COLOR } from '../../constants';

const FriendsMessageComponent = styled.div`
  padding: 0 24px 0 24px;
  height: 100vh;
  background-color: ${THEME_COLOR.WORKOUT[100]};
`;

function FriendsMessage() {
  return (
    <FriendsMessageComponent>
      <FriendsMessageHeader />
      <MessageCard />
      <SendGift />
      <SendGiftButton />
    </FriendsMessageComponent>
  );
}

export default FriendsMessage;
