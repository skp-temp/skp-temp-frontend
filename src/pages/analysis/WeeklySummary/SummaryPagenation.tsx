import React from "react";
import styled from "styled-components";
import ArrowLeft from "../../../assets/images/analysis/ArrowLeft.svg"
import ArrowRight from "../../../assets/images/analysis/ArrowRight.svg"

const Pagenation = styled.div`
  display: flex;
`

const ArrowLeftImage = styled.div`
  background-image: url(${ArrowLeft});
  background-size: cover;
  width: 16px;
  height: 16px;
`

const PagenationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-weight: 12px;
  word-wrap: 'break-word';
`

const ArrowRightImage = styled.div`
  background-image: url(${ArrowRight});
  background-size: cover;
  width: 16px;
  height: 16px;
`

function SummaryPagenation() {
  return (
    <Pagenation>
      <ArrowLeftImage/>
      <PagenationText>
        1월1주차
      </PagenationText>
      <ArrowRightImage/>
    </Pagenation>
  )
}

export default SummaryPagenation;