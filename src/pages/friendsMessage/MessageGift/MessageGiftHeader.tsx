import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../../constants';

const MessageGiftHeaderComponent = styled.div`
  padding-top: 32px;
  display: flex;
`;

const HeaderImage = styled.div`
  background-image: url(images/analysis/workout.svg);
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 6px;
`;

const HeaderText = styled.div`
  color: ${GRAY_COLOR.GRAY_900};
  font-size: 20px;
  font-family: 'PretendardBold';
  line-height: 24px;
`;

function MessageGiftHeader() {
  return (
    <MessageGiftHeaderComponent>
      <HeaderImage />
      <HeaderText>보유중인 운동 테마 아이템</HeaderText>
    </MessageGiftHeaderComponent>
  );
}

export default MessageGiftHeader;
