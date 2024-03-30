import React from 'react';
import styled from 'styled-components';
import NoDataCharacter from '../../assets/images/analysis/NoDataCharacter.png';
import { nullVariable } from '../../pages/analysis/WeeklySummary/SummaryDetail';
import { GRAY_COLOR } from '../../constants';

interface nullComponentProps {
  param: nullVariable;
}

const NullComponent = styled.div<{ $marginTop: number; $marginBottom: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  margin-top: ${(props) => props.$marginTop}px;
  margin-bottom: ${(props) => props.$marginBottom}px;
`;

const NoDataCharacterComponent = styled.div`
  background-image: url(${NoDataCharacter});
  background-size: cover;
  width: 80px;
  height: 80px;
`;

const NoDataText = styled.div`
  color: ${GRAY_COLOR.GRAY_400};
  font-size: 16px;
  font-family: 'PretendardBold';
  line-weight: 16px;
  word-wrap: 'break-word';
`;

function AnalysisNullComponent({ param }: nullComponentProps) {
  return (
    <NullComponent
      $marginTop={param.marginTop}
      $marginBottom={param.marginBottom}
    >
      <NoDataCharacterComponent />
      <NoDataText>{param.text}</NoDataText>
    </NullComponent>
  );
}

export default AnalysisNullComponent;
