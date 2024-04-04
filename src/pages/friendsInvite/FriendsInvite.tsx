import React from 'react';
import styled from 'styled-components';
import FriendsInviteHeader from './FriendsInviteHeader';

const HEADER_STRING = '친구의 사용자 코드가 필요해요.';

const FriendsInviteComponent = styled.div``;

function FriendsInvite() {
  return (
    <FriendsInviteComponent>
      <FriendsInviteHeader headerText={HEADER_STRING} />
    </FriendsInviteComponent>
  );
}

export default FriendsInvite;
