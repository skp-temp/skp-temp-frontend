import React from 'react';
import styled from 'styled-components';
import { SEMANTIC_COLOR, GRAY_COLOR } from '../../constants';

interface PropsType {
  headerString: string;
  counts: number;
}

const HeaderComponent = styled.div`
  display: flex;
`;

const HeaderString = styled.div`
  display: inline-block;
  color: ${GRAY_COLOR.GRAY_600};
  font-size: 12px;
  font-family: 'PretendardRegular';
  line-height: 12px;
  word-wrap: break-word;
  margin-right: 4px;
`;

const Counts = styled.div`
  display: inline-block;
  color: ${SEMANTIC_COLOR.BLUE};
  font-size: 12px;
  font-family: 'PretendardRegular';
  line-height: 12px;
  word-wrap: break-word;
`;

function FriendsMainHeader(props: PropsType) {
  return (
    <HeaderComponent>
      <HeaderString>{props.headerString}</HeaderString>
      <Counts>{props.counts}</Counts>
    </HeaderComponent>
  );
}

export default FriendsMainHeader;
