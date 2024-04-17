import React from 'react';
import styled from 'styled-components';
import { useMessageFocus } from '../../store';
import gift from '../../assets/images/friendsMessage/gift.png';
import chevron_right from '../../assets/images/friendsMessage/chevron_right.svg';
import { GRAY_COLOR } from '../../constants';

const GIFT_STRING = '선물과 함께 보내기';

const SendGiftComponent = styled.div<{ $isNone: string }>`
  margin-top: 24px;
  width: 100%;
  display: ${(props) => props.$isNone};
  align-items: center;
  justify-content: space-between;
  height: 68px;
  background-color: ${GRAY_COLOR.WHITE};
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(28, 28, 30, 0.1);
`;

const GiftLeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const GiftImage = styled.div`
  margin: 0 16px;
  background-image: url(${gift});
  background-size: cover;
  width: 40px;
  height: 40px;
`;

const GiftText = styled.div`
  color: ${GRAY_COLOR.GRAY_800};
  font-size: 16px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
`;

const ChevronRight = styled.div`
  margin-right: 12px;
  background-image: url(${chevron_right});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

function SendGift() {
  const { isFocus } = useMessageFocus();

  return (
    <SendGiftComponent $isNone={isFocus ? 'none' : 'flex'}>
      <GiftLeftBox>
        <GiftImage />
        <GiftText>{GIFT_STRING}</GiftText>
      </GiftLeftBox>
      <ChevronRight />
    </SendGiftComponent>
  );
}

export default SendGift;
