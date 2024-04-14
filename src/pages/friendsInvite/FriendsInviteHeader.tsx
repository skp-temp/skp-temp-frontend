import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../constants';

const FriendsInviteHeaderComponent = styled.div`
  color: ${GRAY_COLOR.GRAY_900};
  font-size: 16px;
  font-family: 'PretendardRegular';
  line-height: 16px;
  word-wrap: break-word;
  margin: 0 24px;
`;

function FriendsInviteHeader(props: { headerText: string }) {
  return (
    <FriendsInviteHeaderComponent>
      {props.headerText}
    </FriendsInviteHeaderComponent>
  );
}

export default React.memo(FriendsInviteHeader);
