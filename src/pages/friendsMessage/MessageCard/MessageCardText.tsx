import React, { useState } from 'react';
import styled from 'styled-components';
import { useMessageInputData, useMessageFocus } from '../../../store';
import { GRAY_COLOR, SEMANTIC_COLOR, THEME_COLOR } from '../../../constants';

const CHANGE_FONT_COUNT = 81;
const MAX_LENGTH = 120;

const MessageCardTextComponent = styled.textarea<{ $size: string }>`
  color: ${GRAY_COLOR.GRAY_900};
  position: relative;
  left: 28px;
  top: 28px;
  width: 256px;
  height: 186px;
  font-size: ${(props) => (props.$size === 'big' ? '20px' : '16px')};
  font-family: ${(props) =>
    props.$size === 'big' ? 'PretendardBold' : 'PretendardRegular'};
  line-height: ${(props) => (props.$size === 'big' ? '30px' : '24px')};
  word-wrap: break-word;
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  caret-color: ${SEMANTIC_COLOR.BLUE};
  &::placeholder {
    color: ${THEME_COLOR.WORKOUT[300]};
  }
`;

function MessageCardText() {
  const { inputData, setInputData } = useMessageInputData();
  const { setIsFocus } = useMessageFocus();
  const [size, setSize] = useState<string>('big');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputData(e.target.value);
    if (e.target.value.length >= CHANGE_FONT_COUNT) {
      setSize('small');
    } else setSize('big');
  };

  const onBlur = () => {
    setIsFocus(false);
    if (inputData.length >= 120) {
      setInputData(inputData.slice(0, MAX_LENGTH));
    }
  };

  const checkEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  return (
    <MessageCardTextComponent
      placeholder="이곳을 눌러서&#13;&#10;응원 메세지를&#13;&#10;입력해주세요"
      value={inputData}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={checkEnter}
      maxLength={MAX_LENGTH}
      $size={size}
    />
  );
}

export default MessageCardText;
