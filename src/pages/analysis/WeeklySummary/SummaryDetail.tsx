import React from "react";
import styled from "styled-components";
import AnalysisNullComponent from "../../../components/analysis/AnalysisNullComponent";
import SummaryItemsComponent from "./SummaryItemsComponent";

export interface nullVariable {
  marginTop: number;
  marginBottom: number;
  text?: string;
}

const PARAMS: nullVariable = {
  marginTop: 12,
  marginBottom: 22,
  text: '만들고 있는 부적이 없어요.'
} 

const DetailComponent = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 16px;
  padding: 28px 15px 34px 15px;
`

function SummaryDetail() {
  return (
    <DetailComponent>
      {/* <AnalysisNullComponent param={PARAMS} /> */}
      <SummaryItemsComponent/>
    </DetailComponent>
  )
}

export default SummaryDetail;