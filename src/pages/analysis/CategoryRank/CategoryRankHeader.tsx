import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16px;
  margin-left: 12px;
`

const HeaderText = styled.div`
  font-size: 16px;
  font-family: "PretendardBold";
  line-height: 16px;
  word-wrap: break-word;
  margin-bottom: 8px;
`

const SubText = styled.div`
  color: #636366;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-height: 20px;
  word-wrap: break-word;
`

function CategoryRankHeader() {
  return (
    <Header>
      <HeaderText>
        부적 카테고리별 순위
      </HeaderText>
      <SubText>
        많이 만든 부적 카테고리를 볼 수 있어요.
      </SubText>
    </Header>
  )
}

export default CategoryRankHeader;