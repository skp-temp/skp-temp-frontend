import React from "react";
import styled from "styled-components";

type propsType = {
  handleslidePrev: () => void;
  handleslideNext: () => void;
  nowPageNum: number;
  maxPageNum: number;
}

const Pagenation = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`

const ArrowLeftImage = styled.div<{$isEnd: string}>`
  background-image: url(images/analysis/ArrowLeft${props => props.$isEnd}.svg);
  background-size: cover;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`

const PagenationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "PretendardRegular";
  line-weight: 12px;
  word-wrap: 'break-word';
`

const ArrowRightImage = styled.div<{$isEnd: string}>`
  background-image: url(images/analysis/ArrowRight${props => props.$isEnd}.svg);
  background-size: cover;
  width: 16px;
  height: 16px;
  margin-left: 8px;
`

function AnalysisPagenation(props : propsType) {

  const getIsPageStart = (now: number) => {
    if (now === 0) return 'end'
    else return '' 
  }

  const getIsPageEnd = (now: number, max: number) => {
    if (now === max) return 'end'
    else return '' 
  }

  return (
    <Pagenation>
      <ArrowLeftImage $isEnd={getIsPageStart(props.nowPageNum)} onClick={props.handleslidePrev}/>
      <PagenationText>
        1-{props.maxPageNum}
      </PagenationText>
      <ArrowRightImage $isEnd={getIsPageEnd(props.nowPageNum, props.maxPageNum-1)} onClick={props.handleslideNext}/>
    </Pagenation>
  )
}

export default AnalysisPagenation;