import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import buttonLarge from '../../assets/images/common/buttonLarge.svg';
import buttonLargeDisable from '../../assets/images/common/buttonLargeDisable.svg';
import { GRAY_COLOR } from '../../constants';

const LargeCTAButtonComponent = styled.div``;

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

function LargeCTAButton(props: { isActive: boolean; text: string }) {
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
    <LargeCTAButtonComponent>
      <ButtonBox
        $buttonStatus={props.isActive ? buttonLarge : buttonLargeDisable}
      >
        <ButtonText
          $color={props.isActive ? GRAY_COLOR.WHITE : GRAY_COLOR.GRAY_400}
        >
          {props.text}
        </ButtonText>
      </ButtonBox>
    </LargeCTAButtonComponent>
  );
}

export default LargeCTAButton;
