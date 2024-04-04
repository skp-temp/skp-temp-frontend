import React from "react";
import styled from "styled-components";
import SummaryPagenation from "./SummaryPagenation";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`

const HeaderText = styled.div`
  font-size: 16px;
  font-family: "PretendardBold";
  line-height: 16px;
  word-wrap: break-word;
  margin-left: 12px;
`

function SummaryHeader() {
  return (
    <Header>
      <HeaderText>
        주간 요약
      </HeaderText>
      <SummaryPagenation/>
    </Header>
  )
}

export default SummaryHeader;