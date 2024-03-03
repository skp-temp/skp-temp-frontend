import React from "react";
import styled from "styled-components";
import SummaryItem from "./SummaryItem";

const ItemsComponent = styled.div``
const DaysText = styled.div`
  display: flex;
  justify-content: space-around;
  width: auto;
  height: auto;
  padding-left: 80px;
`
const DaysTextItem = styled.div<{color: string}>`
  display: flex;
  justify-content: center;
  color: ${prop => prop.color};
  width: 24px;
  height: auto;
  font-size: 14px;
  font-family: "PretendardBold";
  line-height: 14px;
  word-wrap: break-word;
`

function SummaryItemsComponent() {

  const week:string[] = ['월', '화', '수', '목', '금', '토', '일']

  const getNowDayTrue = (idx : number) => {
    let nowDay : number = new Date().getDay() - 1;
    if (nowDay === -1) nowDay = 6;
    if (nowDay === idx) return true;
    else return false;
  };

  return (
    <ItemsComponent>
      <DaysText>{week.map((i, idx) => <DaysTextItem key={idx} color={getNowDayTrue(idx) ? '#007AFF' : '#B1B1BB'}>{i}</DaysTextItem>)}</DaysText>
      <SummaryItem/>
    </ItemsComponent>
  )
}

export default SummaryItemsComponent;