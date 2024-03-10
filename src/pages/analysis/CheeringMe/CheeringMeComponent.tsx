import React from "react";
import styled from "styled-components";
import AnalysisNullComponent from "../../../components/AnalysisNullComponent";
import CheeringMeDetail from "./CheeringMeDetail";
import { nullVariable } from "../WeeklySummary/SummaryDetail";
import { RankItemParam } from "../../../components/RankItems";

const PARAMS: nullVariable = {
  marginTop: 0,
  marginBottom: 22,
  text: '아직 친구가 없어요.'
} 

const DetailComponent = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 16px;
  padding: 28px 22px 16px 22px;
`

const tmpList : RankItemParam[][] = [
  [
    {
      imageUrl: 'aa',
      name: '김혜민',
      rank: 1,
      counts: 16
    },
    {
      imageUrl: 'aa',
      name: '최영진',
      rank: 2,
      counts: 15
    },
    {
      imageUrl: 'aa',
      name: '강동훈',
      rank: 3,
      counts: 8
    }
  ],
]

function CheeringMeComponent() {
  return (
    <DetailComponent>
      {/* <AnalysisNullComponent param={PARAMS} /> */}
      {tmpList.map((i, idx) => (<CheeringMeDetail key={idx} rankItem={i} />))}
    </DetailComponent>
  )
}

export default CheeringMeComponent;