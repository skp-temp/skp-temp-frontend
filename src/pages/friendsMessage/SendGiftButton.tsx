import React, { useMemo, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useMessageInputData } from '../../store';
import buttonLarge from '../../assets/images/common/buttonLarge.svg';
import buttonLargeDisable from '../../assets/images/common/buttonLargeDisable.svg';
import { GRAY_COLOR } from '../../constants';

const SendGiftButtonComponent = styled.div``;

const ButtonBox = styled.div<{ $buttonStatus: string }>`
  background-image: url(${(props) => props.$buttonStatus});
  background-size: 100% 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: ${document.documentElement.clientWidth - 48}px;
  position: fixed;
  bottom: 16px;
  -webkit-backface-visibility: hidden;
`;

const ButtonText = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
  line-height: 16px;
  word-wrap: break-word;
`;

function SendGiftButton() {
  const [color, setColor] = useState<string>(GRAY_COLOR.GRAY_400);
  const { inputData } = useMessageInputData();

  const calButtonStatus = useMemo(() => {
    // 인풋 데이터가 있고, 정규표현식 통과하면 흰색
    if (inputData) {
      setColor(GRAY_COLOR.WHITE);
      return buttonLarge;
      // 아니면 회색
    } else {
      setColor(GRAY_COLOR.GRAY_400);
      return buttonLargeDisable;
    }
  }, [inputData]);

  const imgPreload = (imageArray: string[]) => {
    imageArray.forEach((item) => {
      let img = new Image();
      img.src = item;
    });
  };

  useLayoutEffect(() => {
    imgPreload([buttonLarge, buttonLargeDisable]);
  }, []);

  return (
    <SendGiftButtonComponent>
      <ButtonBox $buttonStatus={calButtonStatus}>
        <ButtonText $color={color}>응원 메세지 보내기</ButtonText>
      </ButtonBox>
    </SendGiftButtonComponent>
  );
}

export default SendGiftButton;
