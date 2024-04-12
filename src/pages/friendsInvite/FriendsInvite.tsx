import React from 'react';
import styled from 'styled-components';
import FriendsInviteHeader from './FriendsInviteHeader';
import FriendsInviteSearch from './FriendsInviteSearch';

const HEADER_STRING = '친구의 사용자 코드가 필요해요.';

const FriendsInviteComponent = styled.div`
  padding-top: 32px;
`;

function FriendsInvite() {
  return (
    <FriendsInviteComponent>
      <FriendsInviteHeader headerText={HEADER_STRING} />
      <FriendsInviteSearch />
    </FriendsInviteComponent>
  );
}

export default FriendsInvite;
