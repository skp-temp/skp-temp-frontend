import React from "react";
import styled from "styled-components";
import AnalysisHeader from "./AnalysisHeader/AnalysisHeader";
import WeeklySummary from "./WeeklySummary/WeeklySummary";
import CategoryRank from "./CategoryRank/CategoryRank";
import EmotionRank from "./EmotionRank/EmotionRank";
import CheeringMe from "./CheeringMe.tsx/CheeringMe";
import CheeringTo from "./CheeringTo/CheeringTo";

const AnalysisPage = styled.div`
  padding: 0 16px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,246,250,1) 20%);
`

function Analysis() {
  return (
    <AnalysisPage>
      <AnalysisHeader/>
      <WeeklySummary/>
      <CategoryRank/>
      <EmotionRank/>
      <CheeringMe/>
      <CheeringTo/>
    </AnalysisPage>
  )
}

export default Analysis;