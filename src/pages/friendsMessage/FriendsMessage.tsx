import React from 'react';
import styled from 'styled-components';
import FriendsMessageHeader from './FriendsMessageHeader/FriendsMessageHeader';
import MessageCard from './MessageCard/MessageCard';
import { THEME_COLOR } from '../../constants';

const FriendsMessageComponent = styled.div`
  padding-top: 24px;
  height: 100vh;
  background-color: ${THEME_COLOR.WORKOUT[100]};
`;

function FriendsMessage() {
  return (
    <FriendsMessageComponent>
      <FriendsMessageHeader />
      <MessageCard />
    </FriendsMessageComponent>
  );
}

export default FriendsMessage;
