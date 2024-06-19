import React from 'react';
import styled from 'styled-components';
import ComponentsPadding from '../../../components/common/ComponentsPadding';
import AnalysisCharacter from '../../../assets/images/analysis/AnalysisCharacter.png';
import { SEMANTIC_COLOR, GRAY_COLOR } from '../../../constants';
import { useUserAnalysis } from '../../../hooks/analysis/user';

const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const HeaderImage = styled.div`
  background-image: url(${AnalysisCharacter});
  background-size: cover;
  width: 119px;
  height: 119px;
`;

const HeaderTextBox = styled.div`
  background: ${GRAY_COLOR.GRAY_150};
  width: auto;
  height: auto;
  border-radius: 20px;
  margin: 15px 12px;
  padding: 16px 48px 20px 32px;
`;

const TextTop = styled.div`
  color: ${GRAY_COLOR.GRAY_800};
  font-size: 16px;
  font-family: 'PretendardMedium';
  line-height: 16px;
  letter-spacing: -0.4px;
  word-wrap: break-word;
`;

const TextBottom = styled.div`
  display: flex;
  align-items: end;
  flex-direction: row;
  margin-top: 10px;
`;

const TextLeft = styled.div`
  color: ${SEMANTIC_COLOR.BLUE};
  font-size: 36px;
  font-family: 'PretendardBold';
  line-height: 28px;
  word-wrap: break-word;
  margin-right: 4px;
`;

const TextRight = styled.div`
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 14px;
  font-family: 'PretendardMedium';
  letter-spacing: -0.4px;
  line-height: 14px;
  word-wrap: break-word;
  margin-bottom: 4px;
`;

function AnalysisHeader() {
  const { isPending, error, data } = useUserAnalysis();

  return (
    <>
      <HeaderComponent>
        <HeaderImage />
        <HeaderTextBox>
          <TextTop>부키와 함께 한 지</TextTop>
          <TextBottom>
            <TextLeft>{data?.result.userDays}</TextLeft>
            <TextRight>일 째</TextRight>
          </TextBottom>
        </HeaderTextBox>
      </HeaderComponent>
      <ComponentsPadding />
    </>
  );
}

export default AnalysisHeader;
