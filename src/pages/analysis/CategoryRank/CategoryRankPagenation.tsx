import React, {useState} from "react";
import styled from "styled-components";

type propsType = {
  handlePageNum : () => void;
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

function CategoryRankPagenation(props : propsType) {

  const [pageNum, setPageNum] = useState<number>(1)

  const endList : string[] = ['End', '', 'End']

  const handlePageNum = () => {
    props.handlePageNum();
    if (pageNum === 1) {
      setPageNum(2);
    } else {
      setPageNum(1);
    }
  }

  return (
    <Pagenation>
      <ArrowLeftImage $isEnd={endList[pageNum-1]} onClick={handlePageNum}/>
      <PagenationText>
        1-2
      </PagenationText>
      <ArrowRightImage $isEnd={endList[pageNum]} onClick={handlePageNum}/>
    </Pagenation>
  )
}

export default CategoryRankPagenation;