import React from 'react';
import styled from 'styled-components';
import MessageGiftHeader from './MessageGiftHeader';
import MessageGiftBox from './MessageGiftBox';
import LargeCTAButton from '../../../components/common/LargeCTAButton';
import { useGiftItemSelect } from '../../../store';

const BUTTON_STRING = '선물 첨부하기';

const MessageGiftComponent = styled.div`
  padding: 0 24px 0 24px;
  height: 100vh;
`;

function MessageGift() {
  const { selectNum } = useGiftItemSelect();

  return (
    <MessageGiftComponent>
      <MessageGiftHeader />
      <MessageGiftBox />
      <LargeCTAButton
        text={BUTTON_STRING}
        isActive={selectNum ? true : false}
      />
    </MessageGiftComponent>
  );
}

export default MessageGift;
