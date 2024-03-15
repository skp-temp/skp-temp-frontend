import React from "react";
import styled from "styled-components";

interface PropsType {
  headerString: string;
  counts: number;
}

const HeaderComponent = styled.div`
  display: flex;
`

const HeaderString = styled.div`
  display: inline-block;
  color: #636366;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-height: 12px;
  word-wrap: break-word;
  margin-right: 4px;
`

const Counts = styled.div`
  display: inline-block;
  color: #007AFF;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-height: 12px;
  word-wrap: break-word;
`

function FriendsMainHeader(props: PropsType) {
  return (
    <HeaderComponent>
      <HeaderString>{props.headerString}</HeaderString>
      <Counts>{props.counts}</Counts>
    </HeaderComponent>
  )
}

export default FriendsMainHeader;