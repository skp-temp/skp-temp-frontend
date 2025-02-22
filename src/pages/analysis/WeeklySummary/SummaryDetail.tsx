import React from 'react';
import styled from 'styled-components';
import AnalysisNullComponent from '../../../components/analysis/AnalysisNullComponent';
import SummaryItemsComponent from './SummaryItemsComponent';
import { GRAY_COLOR } from '../../../constants';

export interface nullVariable {
  marginTop: number;
  marginBottom: number;
  text?: string;
}

const PARAMS: nullVariable = {
  marginTop: 12,
  marginBottom: 22,
  text: '만들고 있는 부적이 없어요.',
};

const DetailComponent = styled.div`
  background: ${GRAY_COLOR.WHITE};
  width: auto;
  height: auto;
  border-radius: 16px;
  padding: 28px 16px 28px 16px;
`;

function SummaryDetail() {
  return (
    <DetailComponent>
      {/* <AnalysisNullComponent param={PARAMS} /> */}
      <SummaryItemsComponent />
    </DetailComponent>
  );
}

export default SummaryDetail;
