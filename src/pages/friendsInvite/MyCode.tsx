import React from 'react';
import styled from 'styled-components';
import copy from '../../assets/images/friendsInvite/copy.svg';
import { GRAY_COLOR } from '../../constants';

const MyCodeComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
`;

const TextBox = styled.div`
  color: ${GRAY_COLOR.GRAY_500};
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
  word-wrap: break-word;
`;

const CodeComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeText = styled.textarea`
  color: ${GRAY_COLOR.GRAY_900};
  height: 14px;
  width: auto;
  font-size: 14px;
  font-family: 'PretendardMedium';
  line-height: 14px;
  letter-spacing: -0.4px;
  word-wrap: break-word;
  text-align: right;
  border: none;
  outline: none;
`;

const CopyImage = styled.div`
  background-image: url(${copy});
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

function MyCode() {
  const onClickCopy = () => {
    const codeText: any = document.getElementById('codeText');
    if (document.getElementById('codeText')) {
      codeText.select();
      document.execCommand('copy');
    }
  };

  return (
    <MyCodeComponent>
      <TextBox>나의 사용자 코드에요.</TextBox>
      <CodeComponent>
        <CodeText id="codeText" readOnly value="@codecode" />
        <CopyImage onClick={onClickCopy} />
      </CodeComponent>
    </MyCodeComponent>
  );
}

export default MyCode;
