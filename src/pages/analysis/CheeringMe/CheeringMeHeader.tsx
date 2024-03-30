import React from 'react';
import styled from 'styled-components';
import { GRAY_COLOR } from '../../../constants';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16px;
  margin-left: 12px;
`;

const HeaderText = styled.div`
  font-size: 16px;
  font-family: 'PretendardBold';
  line-height: 16px;
  word-wrap: break-word;
  margin-bottom: 8px;
`;

const SubText = styled.div`
  color: ${GRAY_COLOR.GRAY_600};
  font-size: 12px;
  font-family: 'PretendardRegular';
  line-height: 20px;
  word-wrap: break-word;
`;

function CheeringMeHeader() {
  return (
    <Header>
      <HeaderText>나를 가장 응원해주는 친구</HeaderText>
      <SubText>나에게 응원메세지를 많이 남긴 친구를 볼 수 있어요.</SubText>
    </Header>
  );
}

export default CheeringMeHeader;
