import React from "react";
import styled from "styled-components";
import ComponentsPadding from "../../../components/ComponentsPadding";
import AnalysisCharacter from "../../../assets/images/analysis/AnalysisCharacter.png"

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`

const HeaderImage = styled.div`
  background-image: url(${AnalysisCharacter});
  background-size: cover;
  width: 119px;
  height: 119px;
`

const HeaderTextBox = styled.div`
  background: #F6F6FA;
  width: auto;
  height: auto;
  border-radius: 20px;
  margin: 15px 12px;
  padding: 16px 48px 20px 32px;
`

const TextTop = styled.div`
  color: #3A3A3C;
  font-size: 16px;
  font-family: "PretendardRegular";
  line-height: 16px;
  letter-spacing: -0.4px;
  word-wrap: break-word;
`

const TextBottom = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
  margin-top: 10px;
`

const TextLeft = styled.div`
  color: #007AFF;
  font-size: 36px;
  font-family: "PretendardBold";
  line-height: 28px;
  word-wrap: break-word;
  margin-right: 4px;
`

const TextRight = styled.div`
  color: #8E8E93;
  font-size: 14px;
  font-family: "PretendardRegular";
  line-height: 14px;
  word-wrap: break-word;
`

function AnalysisHeader() {
  return (
    <>
      <HeaderComponent>
        <HeaderImage/>
        <HeaderTextBox>
          <TextTop>
            부키와 함께 한 지
          </TextTop>
          <TextBottom>
            <TextLeft>
              20
            </TextLeft>
            <TextRight>
              일 째
            </TextRight>
          </TextBottom>
        </HeaderTextBox>
      </HeaderComponent>
      <ComponentsPadding/>
    </>
  )
}

export default AnalysisHeader;