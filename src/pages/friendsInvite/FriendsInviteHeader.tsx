import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../constants';

const FriendsInviteHeaderComponent = styled.div`
  color: ${GRAY_COLOR.GRAY_900};
  font-size: 16px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
  word-wrap: break-word;
`;

function FriendsInviteHeader(props: { headerText: string }) {
  return (
    <FriendsInviteHeaderComponent>
      {props.headerText}
    </FriendsInviteHeaderComponent>
  );
}

export default FriendsInviteHeader;
