import React from "react";
import styled from "styled-components";
import AnalysisNullComponent from "../../../components/analysis/AnalysisNullComponent";
import { nullVariable } from "../WeeklySummary/SummaryDetail";

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

function CheeringToDetail() {
  return (
    <DetailComponent>
      <AnalysisNullComponent param={PARAMS} />
    </DetailComponent>
  )
}

export default CheeringToDetail;